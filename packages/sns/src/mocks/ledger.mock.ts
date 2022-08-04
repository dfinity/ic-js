import type {
  SnsTokenMetadataResponse,
  SnsTokenNameResponse,
  SnsTokenSymbolResponse,
} from "../types/governance.responses";

export const tokenNameResponseMock: SnsTokenNameResponse = { name: "Test" };
export const tokenSymbolResponseMock: SnsTokenSymbolResponse = {
  symbol: "TST",
};

export const tokeMetadataResponseMock: SnsTokenMetadataResponse = {
  ...tokenNameResponseMock,
  ...tokenSymbolResponseMock,
};
