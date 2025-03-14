// Use CommonJS style imports to avoid ES module issues
const { Principal } = require("@dfinity/principal");
const { Actor, HttpAgent } = require("@dfinity/agent");
const fs = require("fs");
const path = require("path");
// Remove https import and use fetch instead

// Import custom CommonJS IDL files
const orchestratorIdl = require("./orchestrator.idl.cjs");
const icrcLedgerIdl = require("./icrc_ledger.idl.cjs");

interface SupportedToken {
  tokenSymbol: string; // Renamed from symbol
  decimals: number;
  ledgerCanisterId: string; // Renamed from ledgerId
}

interface SnsProject {
  root_canister_id: string[];
  ledger_canister_id: string[];
  token_symbol: string;
  name?: string;
  description?: string;
}

const getCk20SupportedTokens = async (): Promise<SupportedToken[]> => {
  // Create an agent
  const agent = new HttpAgent({
    host: "https://icp-api.io",
  });

  // Create orchestrator actor
  const orchestratorId = Principal.fromText("vxkom-oyaaa-aaaar-qafda-cai");
  console.log(`Connecting to orchestrator: ${orchestratorId.toText()}`);
  const orchestrator = Actor.createActor(orchestratorIdl.idlFactory, {
    agent,
    canisterId: orchestratorId,
  });

  // Get the orchestrator info
  console.log("Fetching orchestrator info...");
  const orchestratorInfo = await orchestrator.get_orchestrator_info();
  console.log(
    `Found ${orchestratorInfo.managed_canisters.length} managed canisters`,
  );

  // Process each managed canister to extract tokens
  const supportedTokens: SupportedToken[] = [];

  for (const managedCanister of orchestratorInfo.managed_canisters) {
    console.log(`Processing token: ${managedCanister.ckerc20_token_symbol}`);

    // Check if there's a ledger and it's in the "Installed" state
    const ledgerStatus = managedCanister.ledger[0];
    if (ledgerStatus && "Installed" in ledgerStatus) {
      const ledgerId = ledgerStatus.Installed.canister_id;

      try {
        // Create ledger actor
        console.log(`Connecting to ledger ${ledgerId.toText()}...`);
        const ledger = Actor.createActor(icrcLedgerIdl.idlFactory, {
          agent,
          canisterId: ledgerId,
        });

        // Get token metadata
        const metadataResponse = await ledger.icrc1_metadata();

        const metadata = metadataResponseToMetadata(metadataResponse);

        supportedTokens.push({
          tokenSymbol: metadata.symbol, // Renamed from symbol
          decimals: metadata.decimals,
          ledgerCanisterId: ledgerId.toText(), // Renamed from ledgerId
        });
        console.log(
          `Successfully added ${metadata.symbol} to supported tokens`,
        );
      } catch (error) {
        console.error(
          `Error fetching metadata for ${managedCanister.ckerc20_token_symbol}:`,
          error,
        );
      }
    } else {
      console.log(
        `No installed ledger found for ${managedCanister.ckerc20_token_symbol}`,
      );
    }
    console.log("-".repeat(50));
  }

  console.log(`Total supported tokens found: ${supportedTokens.length}`);
  return supportedTokens;
};

const getSnsSupportedTokens = async (): Promise<SupportedToken[]> => {
  console.log("Starting SNS token discovery...");
  const supportedTokens: SupportedToken[] = [];

  let page = 0;
  let hasMorePages = true;

  while (hasMorePages) {
    try {
      console.log(`Fetching SNS projects page ${page}...`);
      const projects = await fetchSnsProjects(page);

      if (!projects || projects.length === 0) {
        hasMorePages = false;
        console.log(`No more SNS projects found after page ${page - 1}`);
        break;
      }

      console.log(`Found ${projects.length} SNS projects on page ${page}`);

      // Process each project
      for (const project of projects) {
        const ledgerId = project.canister_ids.ledger_canister_id;
        const tokenSymbol =
          project.token_symbol ||
          project.icrc1_metadata?.find(([key]) => key === "icrc1:symbol")?.[1]
            ?.Text ||
          "UNKNOWN";

        console.log(`Processing SNS token: ${tokenSymbol} (${ledgerId})`);

        try {
          // Find decimals in metadata if available
          let decimals = 8; // Default to 8 decimals

          if (project.icrc1_metadata) {
            const decimalsEntry = project.icrc1_metadata.find(
              ([key]) => key === "icrc1:decimals",
            );
            if (
              decimalsEntry &&
              decimalsEntry[1] &&
              "Nat" in decimalsEntry[1]
            ) {
              decimals = Number(decimalsEntry[1].Nat);
            }
          }

          supportedTokens.push({
            tokenSymbol,
            decimals,
            ledgerCanisterId: ledgerId,
          });

          console.log(`Successfully added ${tokenSymbol} to supported tokens`);
        } catch (error) {
          console.error(`Error processing metadata for ${ledgerId}:`, error);
        }

        console.log("-".repeat(50));
      }

      page++;

      // Add a small delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Error processing SNS projects page ${page}:`, error);
      hasMorePages = false;
    }
  }

  console.log(`Total SNS tokens found: ${supportedTokens.length}`);
  return supportedTokens;
};

// Helper function to convert metadata response to IcrcTokenMetadata
const metadataResponseToMetadata = (metadataResponse: any) => {
  const metadata: any = {};

  for (const [key, value] of metadataResponse) {
    if (key === "icrc1:symbol" && "Text" in value) {
      metadata.symbol = value.Text;
    } else if (key === "icrc1:decimals" && "Nat" in value) {
      metadata.decimals = Number(value.Nat);
    }
    // Removed the icrc1:name and icrc1:fee cases
  }

  return metadata;
};

// Function to fetch SNS projects from the API
const fetchSnsProjects = async (page: number): Promise<any[]> => {
  try {
    const url = `https://3r4gx-wqaaa-aaaaq-aaaia-cai.icp0.io/v1/sns/list/page/${page}/slow.json`;

    console.log(`Fetching SNS projects from: ${url}`);
    const response = await fetch(url);

    if (!response.ok) {
      if (page > 0 && response.status === 404) {
        // This is expected when we've reached the end of pages
        return [];
      }
      throw new Error(`API responded with status code ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching SNS projects:`, error);
    throw error;
  }
};

// Function to save tokens to a JSON file
const saveToJsonFile = (tokens: SupportedToken[], filename: string): void => {
  const fullPath = path.join(__dirname, filename);

  // Write the data to the file
  fs.writeFileSync(fullPath, JSON.stringify(tokens, null, 2));

  console.log(`Saved ${tokens.length} tokens to ${fullPath}`);
};

const main = async () => {
  try {
    console.log("Starting token discovery...");

    // Get tokens from both sources
    const ckERC20Tokens = await getCk20SupportedTokens();
    const snsTokens = await getSnsSupportedTokens();

    const icpToken: SupportedToken = {
      tokenSymbol: "ICP",
      decimals: 8,
      ledgerCanisterId: "ryjl3-tyaaa-aaaaa-aaaba-cai",
    };
    const ckBTCToken: SupportedToken = {
      tokenSymbol: "ckBTC",
      decimals: 8,
      ledgerCanisterId: "mxzaz-hqaaa-aaaar-qaada-cai",
    };

    // Combine the tokens
    const allSupportedTokens = [
      icpToken,
      ckBTCToken,
      ...ckERC20Tokens,
      ...snsTokens,
    ];

    // Save to JSON file
    saveToJsonFile(allSupportedTokens, "all-supported-tokens.json");
    // saveToJsonFile(ckERC20Tokens, "ckERC20-tokens.json");
    // saveToJsonFile(snsTokens, "sns-tokens.json");
  } catch (error) {
    console.error("Error:", error);
  }
};

main();
