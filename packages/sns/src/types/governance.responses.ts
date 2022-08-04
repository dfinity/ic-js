export type SnsTokenNameResponse = { name: string };
export type SnsTokenSymbolResponse = { symbol: string };
export type SnsTokenMetadataResponse = SnsTokenNameResponse &
  SnsTokenSymbolResponse;
