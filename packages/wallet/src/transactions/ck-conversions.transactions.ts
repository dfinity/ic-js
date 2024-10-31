import type { IcrcBlockIndex } from "@dfinity/ledger-icrc";
import { IcrcLedgerCanister } from "@dfinity/ledger-icrc";
import { NANO_SECONDS_IN_MINUTE } from "../constants/time.constants";
import { ConversionStep } from "../enums/progress.enums";
import type {
  ApproveTransferParams,
  IcTransferParams,
  LedgerCanisterParams,
} from "../types/ck-conversions.transactions";
import { toAccount } from "../utils/account.utils";
import { ConversionStatus } from "../utils/progress.utils";
import { nowInBigIntNanoSeconds } from "../utils/time.utils";
import { withdrawEth } from "./eth-withdrawals.transactions";

const ledgerCanister = async ({
  ledgerCanisterId,
  agent,
}: LedgerCanisterParams): Promise<IcrcLedgerCanister> =>
  IcrcLedgerCanister.create({
    agent,
    canisterId: ledgerCanisterId,
  });

export const approveTransfer = async ({
  canisters: { ledgerCanisterId, minterCanisterId },
  agent,
  amount,
}: ApproveTransferParams): Promise<IcrcBlockIndex> => {
  const { approve } = await ledgerCanister({ ledgerCanisterId, agent });

  const now: bigint = nowInBigIntNanoSeconds();

  return approve({
    amount,
    spender: toAccount({ owner: minterCanisterId }),
    created_at_time: now,
    expires_at: now + 5n * NANO_SECONDS_IN_MINUTE,
  });
};

// https://github.com/dfinity/ic/blob/master/rs/ethereum/cketh/docs/cketh.adoc#withdrawal-cketh-to-eth
export const convertCkEthToEth = async ({
  canisters,
  agent,
  amount,
  to,
  statusCallback,
}: IcTransferParams): Promise<void> => {
  const currentStatus = new ConversionStatus({
    nextStep: ConversionStep.APPROVE_TRANSFER,
    statusCallback,
  });

  currentStatus.updateNextStep(ConversionStep.SEND);

  await approveTransfer({
    canisters,
    agent,
    amount,
  });

  currentStatus.updateNextStep(ConversionStep.DONE);

  const { minterCanisterId } = canisters;

  await withdrawEth({
    minterCanisterId,
    agent,
    address: to,
    amount,
  });

  currentStatus.updateNextStep();
};
