import type {
  SnsTokenMetadata,
  SnsTokenName,
  SnsTokenSymbol,
} from "../types/ledger.responses";

export const tokenNameResponseMock: SnsTokenName = { name: "Test" };
export const tokenSymbolResponseMock: SnsTokenSymbol = { symbol: "TST" };

export const tokeMetadataResponseMock: SnsTokenMetadata = {
  ...tokenNameResponseMock,
  ...tokenSymbolResponseMock,
};
