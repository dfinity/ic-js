import { IDL } from "@dfinity/candid";
import { MAINNET_LEDGER_CANISTER_ID } from "@dfinity/ledger-icp/src/constants/canister_ids";
import { toTransferArg } from "@dfinity/ledger-icrc/src/converters/ledger.converters";
import { TransferParams } from "@dfinity/ledger-icrc/src/types/ledger.params";
import { MAINNET_GOVERNANCE_CANISTER_ID } from "@dfinity/nns/src/constants/canister_ids";
import { Principal } from "@dfinity/principal";
import {
  arrayOfNumberToUint8Array,
  fromNullable,
  nonNullish,
  numberToUint8Array,
  uint8ArrayToBigInt,
} from "@dfinity/utils";
// Requires `"resolveJsonModule": true` in tsconfig.json
import supportedTokens from "./20250205-supported-tokens.json";
import { transferFn } from "./sns-ledger.idl";
import {
  createBlob,
  defaultCaller,
  formatTokenUlps,
  splitAccount,
  splitPrincipal,
  writeToJson,
} from "./utils";

/**
 * Issue: https://github.com/Zondax/ledger-icp/issues/248#issuecomment-2636809451
 */

/**
 * Specific business logic.
 *
 * - When is ICP and when not.
 * - Convert memo to bigint.
 * - When to show fee and when not.
 * - Default fee for ICP.
 * - Textual representation of accounts.
 * - How to create the "source" account.
 * - When to show "ICP" and when "Tokens".
 */

interface Params extends TransferParams {
  canisterId: Principal;
  owner: Principal;
}

// Fee is optional, if not provided, it will be set to 10000 which is the ICP fee
const ICP_DEFAULT_FEE_E8S = 10_000n;

const createTestVector = (params: Params) => {
  const rawRequestBody = toTransferArg(params);
  const isICP =
    params.canisterId.toText() === MAINNET_LEDGER_CANISTER_ID.toText();

  const isStakeNeuron =
    isICP &&
    params.to.owner.toText() === MAINNET_GOVERNANCE_CANISTER_ID.toText();

  const token = supportedTokens.find(
    (token: any) => token.ledgerCanisterId === params.canisterId.toText(),
  );

  let outputTxType = isStakeNeuron
    ? "Stake Neuron"
    : nonNullish(token)
    ? `Send ${token.tokenSymbol}`
    : "Send Tokens";
  const canisterIdOutputs = splitPrincipal(params.canisterId).map(
    (data, i, elements) =>
      `Canister Id [${i + 1}/${elements.length}] : ${data}`,
  );

  const fromOutputs = splitAccount(
    {
      owner: params.owner,
      subaccount: params.from_subaccount,
    },
    "From account",
  );
  const toOutputs = splitAccount(
    {
      owner: params.to.owner,
      subaccount: fromNullable(params.to.subaccount),
    },
    "To account",
  );

  const amountToken = nonNullish(token)
    ? formatTokenUlps({
        value: BigInt(params.amount),
        tokenDecimals: Number(token.decimals),
        defaultDisplayedDecimals: 4,
        maxDisplayedDecimals: 8,
        detailed: true,
      })
    : BigInt(params.amount);
  const paymentOutput = nonNullish(token)
    ? `Payment (${token.tokenSymbol}) : ${amountToken}`
    : `Payment (Tokens) : ${amountToken}`;

  // Do not show fee if it's not present in the request body.
  // Except if it's ICP, in which case we always show the fee.
  let feeOutput: string | undefined = undefined;
  if (isICP || params.fee !== undefined) {
    const feeToken = nonNullish(token)
      ? formatTokenUlps({
          value: BigInt(params.fee ?? ICP_DEFAULT_FEE_E8S),
          tokenDecimals: Number(token.decimals),
          defaultDisplayedDecimals: 4,
          maxDisplayedDecimals: 8,
          detailed: true,
        })
      : BigInt(params.fee ?? 0);
    feeOutput = nonNullish(token)
      ? `Maximum fee (${token.tokenSymbol}) : ${feeToken}`
      : `Maximum fee (Tokens) : ${feeToken}`;
  }

  const memoOutput =
    params.memo !== undefined
      ? `Memo : ${uint8ArrayToBigInt(params.memo).toString()}`
      : "Memo : 0";

  const output = [
    outputTxType,
    ...(isICP ? [] : canisterIdOutputs),
    ...fromOutputs,
    ...(isStakeNeuron ? [] : toOutputs),
    paymentOutput,
    ...(feeOutput !== undefined ? [feeOutput] : []),
    memoOutput,
  ];
  return {
    blob_candid: createBlob({
      arg: IDL.encode(transferFn.argTypes, [rawRequestBody]),
      methodName: "icrc1_transfer",
      canisterId: params.canisterId,
      caller: params.owner,
    }),
    output: output.map((element, index) => `${index + 1} | ${element}`),
    isICP,
    name: `ICRC1 Transfer ${
      nonNullish(token)
        ? `${token?.tokenSymbol} - ${token?.decimals} decimals`
        : "Unsupported Token"
    }`,
    canisterId: params.canisterId.toText(),
    caller: params.owner.toText() ?? defaultCaller.toText(),
    candid_request: rawRequestBody,
  };
};

const main = () => {
  try {
    const subaccount1 = arrayOfNumberToUint8Array([
      215, 232, 81, 101, 44, 208, 50, 186, 94, 215, 107, 23, 246, 38, 170, 71,
      130, 159, 6, 229, 35, 90, 13, 88, 14, 150, 211, 114, 119, 41, 234, 36,
    ]);
    const subaccount2 = arrayOfNumberToUint8Array([
      163, 110, 20, 60, 134, 231, 228, 113, 231, 199, 25, 80, 100, 135, 207,
      122, 108, 244, 13, 167, 99, 97, 174, 175, 238, 81, 51, 225, 217, 172, 234,
      61,
    ]);
    const principal1 = Principal.fromText(
      "krpzt-buecq-u3umg-7kb7r-j5jpx-twqwa-3ykc4-y3cnk-7kwvw-5bq6z-mae",
    );
    const principal2 = Principal.fromText(
      "2dfd6-abjpf-eihu7-pwv6m-qnlbt-oszmg-kb26q-rvqms-onmuh-mwiq3-uqe",
    );
    const ckETHCanisterId = Principal.fromText("ss2fx-dyaaa-aaaar-qacoq-cai");
    const ckUsdcCanisterId = Principal.fromText("xevnm-gaaaa-aaaar-qafnq-cai");
    const chatCanisterId = Principal.fromText("2ouva-viaaa-aaaaq-aaamq-cai");
    const unsupportedCanisterId = Principal.fromText(
      "ppmzm-3aaaa-aaaaa-aacpq-cai",
    );
    const vectors = [
      // ckETH (18 decimals)
      createTestVector({
        owner: principal1,
        to: {
          owner: principal2,
          subaccount: [],
        },
        amount: BigInt(1_000_000_000_000_000_000),
        canisterId: ckETHCanisterId,
      }),
      createTestVector({
        owner: principal1,
        to: {
          owner: principal2,
          subaccount: [],
        },
        amount: BigInt(1_500_000_000_000_000_000),
        from_subaccount: subaccount1,
        fee: BigInt(100_000_000_000_000),
        canisterId: ckETHCanisterId,
        created_at_time: BigInt(1629200000000000000),
      }),
      createTestVector({
        owner: principal1,
        to: {
          owner: principal2,
          subaccount: [subaccount2],
        },
        amount: BigInt(32_500_000_000_000_000_000),
        from_subaccount: subaccount1,
        fee: BigInt(100_000_000_000_000),
        canisterId: ckETHCanisterId,
        created_at_time: BigInt(1629200000000000000),
      }),
      // ckUSDC (6 decimals)
      createTestVector({
        owner: principal1,
        to: {
          owner: principal2,
          subaccount: [subaccount2],
        },
        amount: BigInt(3_300_000),
        memo: numberToUint8Array(11223312),
        fee: BigInt(300),
        canisterId: ckUsdcCanisterId,
        created_at_time: BigInt(1675249266635000000),
      }),
      createTestVector({
        owner: principal2,
        to: {
          owner: principal1,
          subaccount: [],
        },
        amount: BigInt(3_140_000),
        memo: numberToUint8Array(11223312),
        canisterId: ckUsdcCanisterId,
        created_at_time: BigInt(1675249266635000000),
      }),
      createTestVector({
        owner: principal2,
        to: {
          owner: principal1,
          subaccount: [subaccount1],
        },
        amount: BigInt(13_314_000),
        memo: numberToUint8Array(11223312),
        from_subaccount: subaccount2,
        fee: BigInt(200),
        canisterId: ckUsdcCanisterId,
        created_at_time: BigInt(1675249266635000000),
      }),
      // CHAT (8 decimals)
      createTestVector({
        owner: principal1,
        to: {
          owner: principal2,
          subaccount: [subaccount2],
        },
        amount: BigInt(330_000_000),
        memo: numberToUint8Array(11223312),
        fee: BigInt(30_000),
        canisterId: chatCanisterId,
        created_at_time: BigInt(1675249266635000000),
      }),
      createTestVector({
        owner: principal2,
        to: {
          owner: principal1,
          subaccount: [],
        },
        amount: BigInt(314_000_000),
        memo: numberToUint8Array(11223312),
        canisterId: chatCanisterId,
        created_at_time: BigInt(1675249266635000000),
      }),
      createTestVector({
        owner: principal2,
        to: {
          owner: principal1,
          subaccount: [subaccount1],
        },
        amount: BigInt(1331_400_000),
        memo: numberToUint8Array(11223312),
        from_subaccount: subaccount2,
        fee: BigInt(20_000),
        canisterId: chatCanisterId,
        created_at_time: BigInt(1675249266635000000),
      }),
      // Unsupported token
      createTestVector({
        owner: principal1,
        to: {
          owner: principal2,
          subaccount: [subaccount2],
        },
        amount: BigInt(330_000_000),
        memo: numberToUint8Array(11223312),
        fee: BigInt(30_000),
        canisterId: unsupportedCanisterId,
        created_at_time: BigInt(1675249266635000000),
      }),
      createTestVector({
        owner: principal2,
        to: {
          owner: principal1,
          subaccount: [],
        },
        amount: BigInt(314_000_000),
        memo: numberToUint8Array(11223312),
        canisterId: unsupportedCanisterId,
        created_at_time: BigInt(1675249266635000000),
      }),
      createTestVector({
        owner: principal2,
        to: {
          owner: principal1,
          subaccount: [subaccount1],
        },
        amount: BigInt(1331_400_000),
        memo: numberToUint8Array(11223312),
        from_subaccount: subaccount2,
        fee: BigInt(20_000),
        canisterId: unsupportedCanisterId,
        created_at_time: BigInt(1675249266635000000),
      }),
      // ICP
      createTestVector({
        owner: principal1,
        to: {
          owner: principal2,
          subaccount: [],
        },
        amount: BigInt(100_000_000),
        canisterId: MAINNET_LEDGER_CANISTER_ID,
      }),
      createTestVector({
        owner: principal2,
        to: {
          owner: principal1,
          subaccount: [subaccount1],
        },
        amount: BigInt(31_400_000),
        canisterId: MAINNET_LEDGER_CANISTER_ID,
      }),
      createTestVector({
        owner: principal2,
        to: {
          owner: principal1,
          subaccount: [subaccount1],
        },
        amount: BigInt(31_400_000),
        from_subaccount: subaccount2,
        canisterId: MAINNET_LEDGER_CANISTER_ID,
        created_at_time: BigInt(1675249266635000000),
      }),
      createTestVector({
        owner: principal2,
        to: {
          owner: principal1,
          subaccount: [subaccount1],
        },
        amount: BigInt(31_400_000),
        memo: numberToUint8Array(11223312),
        canisterId: MAINNET_LEDGER_CANISTER_ID,
        created_at_time: BigInt(1675249266635000000),
      }),
      createTestVector({
        owner: principal2,
        to: {
          owner: principal1,
          subaccount: [subaccount1],
        },
        amount: BigInt(31_400_000),
        fee: BigInt(100_000),
        canisterId: MAINNET_LEDGER_CANISTER_ID,
        created_at_time: BigInt(1629200000000000000),
      }),
      createTestVector({
        owner: principal2,
        to: {
          owner: principal1,
          subaccount: [subaccount1],
        },
        amount: BigInt(131_400_000),
        fee: BigInt(30_000),
        from_subaccount: subaccount2,
        memo: numberToUint8Array(11223312),
        canisterId: MAINNET_LEDGER_CANISTER_ID,
        created_at_time: BigInt(1629200000000000000),
      }),
      createTestVector({
        owner: principal2,
        to: {
          owner: principal1,
          subaccount: [subaccount1],
        },
        amount: BigInt(131_400_000),
        fee: BigInt(30_000),
        from_subaccount: subaccount2,
        memo: numberToUint8Array(11223312),
        canisterId: MAINNET_LEDGER_CANISTER_ID,
        created_at_time: BigInt(1675249266635000000),
      }),
      // Stake ICP
      createTestVector({
        owner: principal2,
        to: {
          owner: MAINNET_GOVERNANCE_CANISTER_ID,
          subaccount: [subaccount1],
        },
        amount: BigInt(131_400_000),
        fee: BigInt(30_000),
        from_subaccount: subaccount2,
        memo: numberToUint8Array(11223312),
        canisterId: MAINNET_LEDGER_CANISTER_ID,
        created_at_time: BigInt(1675249266635000000),
      }),
      createTestVector({
        owner: principal2,
        to: {
          owner: MAINNET_GOVERNANCE_CANISTER_ID,
          subaccount: [subaccount1],
        },
        amount: BigInt(3_331_400_000),
        memo: numberToUint8Array(11223312),
        canisterId: MAINNET_LEDGER_CANISTER_ID,
        created_at_time: BigInt(1675249266635000000),
      }),
    ];

    writeToJson({
      data: vectors,
      fileName: "new-decimals-vectors.json",
    });
    console.log("File created successfully");
  } catch (error) {
    console.log("There was an error");
    console.log(error);
  }
};

main();
