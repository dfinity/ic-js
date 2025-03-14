// Use CommonJS style imports to avoid ES module issues
const { Principal } = require("@dfinity/principal");
const { Actor, HttpAgent } = require("@dfinity/agent");

// Import custom CommonJS IDL files
const orchestratorIdl = require("../../packages/cketh/candid/orchestrator.idl.cjs");
const icrcLedgerIdl = require("../../packages/ledger-icrc/candid/icrc_ledger.idl.cjs");

interface SupportedToken {
  name: string;
  symbol: string;
  fee: bigint;
  decimals: number;
  icon?: string;
  ledgerId: string;
}

const getCk20SupportedTokens = async (): Promise<SupportedToken[]> => {
  // Create an agent
  const agent = new HttpAgent({
    host: "https://icp-api.io",
  });

  // Create orchestrator actor
  const orchestratorId = Principal.fromText("vxkom-oyaaa-aaaar-qafda-cai");
  const orchestrator = Actor.createActor(orchestratorIdl.idlFactory, {
    agent,
    canisterId: orchestratorId,
  });

  // Get the orchestrator info
  const orchestratorInfo = await orchestrator.get_orchestrator_info();

  // Process each managed canister to extract tokens
  const supportedTokens: SupportedToken[] = [];

  for (const managedCanister of orchestratorInfo.managed_canisters) {
    // Check if there's a ledger and it's in the "Installed" state
    const ledgerStatus = managedCanister.ledger[0];
    if (ledgerStatus && "Installed" in ledgerStatus) {
      const ledgerId = ledgerStatus.Installed.canister_id;

      try {
        // Create ledger actor
        const ledger = Actor.createActor(icrcLedgerIdl.idlFactory, {
          agent,
          canisterId: ledgerId,
        });

        // Get token metadata
        const metadataResponse = await ledger.icrc1_metadata();
        const metadata = metadataResponseToMetadata(metadataResponse);

        supportedTokens.push({
          ...metadata,
          ledgerId: ledgerId.toText(),
        });
      } catch (error) {
        console.error(
          `Error fetching metadata for ${managedCanister.ckerc20_token_symbol}:`,
          error,
        );
      }
    }
  }

  return supportedTokens;
};

// Helper function to convert metadata response to IcrcTokenMetadata
const metadataResponseToMetadata = (metadataResponse: any) => {
  const metadata: any = {};

  for (const [key, value] of metadataResponse) {
    if (key === "icrc1:name" && "Text" in value) {
      metadata.name = value.Text;
    } else if (key === "icrc1:symbol" && "Text" in value) {
      metadata.symbol = value.Text;
    } else if (key === "icrc1:decimals" && "Nat" in value) {
      metadata.decimals = Number(value.Nat);
    } else if (key === "icrc1:fee" && "Nat" in value) {
      metadata.fee = BigInt(value.Nat);
    } else if (key === "icrc1:logo" && "Text" in value) {
      metadata.icon = value.Text;
    }
  }

  return metadata;
};

const main = async () => {
  try {
    const supportedTokens = await getCk20SupportedTokens();
    console.log(
      JSON.stringify(
        supportedTokens,
        (_, value) => (typeof value === "bigint" ? value.toString() : value),
        2,
      ),
    );
  } catch (error) {
    console.error("Error:", error);
  }
};

main();
