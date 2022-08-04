import { ActorSubclass } from "@dfinity/agent";
import { mock } from "jest-mock-extended";
import type { _SERVICE as SnsLedgerService } from "../candid/ledger";
import { SnsLedgerCanister } from "./ledger.canister";
import {
  tokeMetadataResponseMock,
  tokenNameResponseMock,
  tokenSymbolResponseMock,
} from "./mocks/ledger.mock";
import { rootCanisterIdMock } from "./mocks/sns.mock";

describe("Ledger canister", () => {
  it("should return the name of the token", async () => {
    const service = mock<ActorSubclass<SnsLedgerService>>();
    service.name.mockResolvedValue(tokenNameResponseMock);

    const canister = SnsLedgerCanister.create({
      canisterId: rootCanisterIdMock,
      certifiedServiceOverride: service,
    });

    const res = await canister.getName({});
    expect(res).toEqual(tokenNameResponseMock);
  });

  it("should return the symbol of the token", async () => {
    const service = mock<ActorSubclass<SnsLedgerService>>();
    service.symbol.mockResolvedValue(tokenSymbolResponseMock);

    const canister = SnsLedgerCanister.create({
      canisterId: rootCanisterIdMock,
      certifiedServiceOverride: service,
    });

    const res = await canister.getSymbol({});
    expect(res).toEqual(tokenSymbolResponseMock);
  });

  it("should return the token metadata", async () => {
    const service = mock<ActorSubclass<SnsLedgerService>>();
    service.name.mockResolvedValue(tokenNameResponseMock);
    service.symbol.mockResolvedValue(tokenSymbolResponseMock);

    const canister = SnsLedgerCanister.create({
      canisterId: rootCanisterIdMock,
      certifiedServiceOverride: service,
    });

    const res = await canister.metadata({});
    expect(res).toEqual(tokeMetadataResponseMock);
  });
});
