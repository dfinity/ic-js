import { Principal } from "@dfinity/principal";
import type { ListSnsCanistersResponse } from "../../candid/sns_root";
import { Ticket } from "../../candid/sns_swap";

export const rootCanisterIdMock: Principal = Principal.fromText(
  "pin7y-wyaaa-aaaaa-aacpa-cai"
);

export const ledgerCanisterIdMock: Principal = Principal.fromText(
  "ktxdj-qiaaa-aaaaa-aacqa-cai"
);

export const governanceCanisterIdMock: Principal = Principal.fromText(
  "ppmzm-3aaaa-aaaaa-aacpq-cai"
);

export const swapCanisterIdMock: Principal = Principal.fromText(
  "kuwf5-5qaaa-aaaaa-aacqq-cai"
);

export const indexCanisterIdMock: Principal = Principal.fromText(
  "qjdve-lqaaa-aaaaa-aaaeq-cai"
);

export const snsMock: ListSnsCanistersResponse = {
  root: [rootCanisterIdMock],
  ledger: [ledgerCanisterIdMock],
  governance: [governanceCanisterIdMock],
  swap: [swapCanisterIdMock],
  index: [indexCanisterIdMock],
  dapps: [],
  archives: [],
};

export const saleTicketMock: Ticket = {
  creation_time: 1n,
  ticket_id: 2n,
  account: [
    {
      owner: [Principal.fromText("aaaaa-aa")],
      subaccount: [],
    },
  ],
  amount_icp_e8s: 3n,
};
