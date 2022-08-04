import type {
  TokenInfoResponse,
  TokenNameResponse,
  TokenSymbolResponse,
} from "../types/governance.responses";

export const tokenNameResponseMock: TokenNameResponse = { name: "Test" };
export const tokenSymbolResponseMock: TokenSymbolResponse = { symbol: "TST" };

export const tokenInfoResponseMock: TokenInfoResponse = {
  ...tokenNameResponseMock,
  ...tokenSymbolResponseMock,
};
