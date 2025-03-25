import { expect } from "@jest/globals";
import { mockIdentity } from "../mocks/identity.mock";
import { nonNullish } from "../utils/nullish.utils";
import { queryAndUpdate } from "./query";
import type {
  QueryAndUpdateParams,
  QueryAndUpdatePromiseResolution,
  QueryAndUpdateRequestParams
} from "../types/query-and-update.params";

describe("query", () => {
  describe("queryAndUpdate", () => {
    const delay = 100;

    const queryResponse = "query response";
    const updateResponse = "update response";

    const queryErrorObj = new Error("Query failed");
    const updateErrorObj = new Error("Update failed");

    let params: {
      faster?: "query" | "update";
      requestError?: boolean;
      queryError?: boolean;
      updateError?: boolean;
      resolution?: QueryAndUpdatePromiseResolution;
    } = {};

    const createMockParams = (): {
      mockParams: QueryAndUpdateParams<string>;
      requestMock: jest.Mock;
      onLoadMock: jest.Mock;
      onErrorMock: jest.Mock;
      onCertifiedErrorMock: jest.Mock;
    } => {
      const { faster, requestError, queryError, updateError, resolution } =
        params;

      const requestMock: jest.Mock = jest.fn().mockResolvedValue("response");
      const onLoadMock: jest.Mock = jest.fn();
      const onErrorMock: jest.Mock = jest.fn();
      const onCertifiedErrorMock: jest.Mock = jest.fn();

      const mockQueryResult: jest.Mock = jest
        .fn()
        .mockResolvedValueOnce(queryResponse);
      const mockUpdateResult: jest.Mock = jest
        .fn()
        .mockResolvedValueOnce(updateResponse);

      const mockRequestFasterQuery = ({
        certified,
      }: QueryAndUpdateRequestParams) =>
        certified
          ? new Promise((resolve) =>
              setTimeout(() => resolve(mockUpdateResult()), delay),
            )
          : mockQueryResult();
      const mockRequestFasterUpdate = ({
        certified,
      }: QueryAndUpdateRequestParams) =>
        certified
          ? mockUpdateResult()
          : new Promise((resolve) =>
              setTimeout(() => resolve(mockQueryResult()), delay),
            );

      if (requestError) {
        console.error("Request failed");
        requestMock.mockReset().mockRejectedValue(new Error("Request failed"));
      }

      if (queryError) {
        mockQueryResult.mockReset().mockRejectedValueOnce(queryErrorObj);
      }

      if (updateError) {
        mockUpdateResult.mockReset().mockRejectedValueOnce(updateErrorObj);
      }

      if (nonNullish(faster)) {
        requestMock.mockImplementation(
          faster === "query" ? mockRequestFasterQuery : mockRequestFasterUpdate,
        );
      }

      const mockParams: QueryAndUpdateParams<string> = {
        request: requestMock,
        onLoad: onLoadMock,
        onError: onErrorMock,
        onCertifiedError: onCertifiedErrorMock,
        identity: mockIdentity,
        resolution,
      };

      return {
        mockParams,
        requestMock,
        onLoadMock,
        onErrorMock,
        onCertifiedErrorMock,
      };
    };

    beforeEach(() => {
      jest.resetAllMocks();

      // We mock console just to avoid unnecessary logs while running the tests
      jest.spyOn(console, "error").mockImplementation(() => {});

      params = {};
    });

    it("should call request with `certified: false` and then with `certified: true`", async () => {
      const { mockParams, requestMock } = createMockParams();

      requestMock.mockResolvedValue("response");

      await queryAndUpdate(mockParams);

      expect(requestMock).toHaveBeenCalledTimes(2);
      expect(requestMock).toHaveBeenNthCalledWith(1, {
        certified: false,
        identity: mockIdentity,
      });
      expect(requestMock).toHaveBeenNthCalledWith(2, {
        certified: true,
        identity: mockIdentity,
      });
    });

    it("should not wait for the slowest request to finish with `race` resolution (default)", async () => {
      params = { resolution: undefined };
      const { mockParams, requestMock } = createMockParams();

      requestMock
        .mockResolvedValueOnce("response-1")
        .mockResolvedValueOnce(
          new Promise((resolve) =>
            setTimeout(() => resolve("response-2"), delay),
          ),
        );

      const start = Date.now();
      await queryAndUpdate(mockParams);
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(delay);
    });

    it("should wait for all requests to finish with `all_settled` resolution", async () => {
      params = { resolution: "all_settled" };
      const { mockParams, requestMock } = createMockParams();

      requestMock
        .mockResolvedValueOnce("response-1")
        .mockResolvedValueOnce(
          new Promise((resolve) =>
            setTimeout(() => resolve("response-2"), delay),
          ),
        );

      const start = Date.now();
      await queryAndUpdate(mockParams);
      const duration = Date.now() - start;

      expect(duration).toBeGreaterThanOrEqual(delay);
    });

    describe("when both requests succeed", () => {
      it("should not call `onError`", async () => {
        const { mockParams, onErrorMock } = createMockParams();

        await queryAndUpdate(mockParams);

        expect(onErrorMock).not.toHaveBeenCalled();
      });

      it("should not call `onCertifiedError`", async () => {
        const { mockParams, onCertifiedErrorMock } = createMockParams();

        await queryAndUpdate(mockParams);

        expect(onCertifiedErrorMock).not.toHaveBeenCalled();
      });

      it("should not log the console error", async () => {
        const { mockParams } = createMockParams();

        await queryAndUpdate(mockParams);

        expect(console.error).not.toHaveBeenCalled();
      });
    });

    describe("when both requests fail", () => {
      beforeEach(() => {
        params = { requestError: true };
      });

      it("should not call `onLoad`", async () => {
        const { mockParams, onLoadMock } = createMockParams();

        await queryAndUpdate(mockParams);

        expect(onLoadMock).not.toHaveBeenCalled();
      });
    });

    describe("likely scenario: `query` is faster than `update`", () => {
      describe("resolution: `race` (default)", () => {
        describe("when `query` and `update` both succeed", () => {
          beforeEach(() => {
            params = { faster: "query", resolution: undefined };
          });

          it("should call `onLoad` only with `query` response", async () => {
            const { mockParams, onLoadMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onLoadMock).toHaveBeenCalledTimes(1);
            expect(onLoadMock).toHaveBeenNthCalledWith(1, {
              certified: false,
              response: queryResponse,
            });
          });
        });

        describe("when `query` succeeds and `update` fails", () => {
          beforeEach(() => {
            params = {
              faster: "query",
              resolution: undefined,
              updateError: true,
            };
          });

          it("should ignore `update` error and call `onLoad` with `query` response", async () => {
            const { mockParams, onLoadMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onLoadMock).toHaveBeenCalledTimes(1);
            expect(onLoadMock).toHaveBeenNthCalledWith(1, {
              certified: false,
              response: queryResponse,
            });
          });

          it("should ignore `update` error and not call `onError`", async () => {
            const { mockParams, onErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onErrorMock).not.toHaveBeenCalled();
          });

          it("should ignore `update` error and not call `onCertifiedError`", async () => {
            const { mockParams, onCertifiedErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).not.toHaveBeenCalled();
          });

          it("should ignore `update` error and not log the console error", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(console.error).not.toHaveBeenCalled();
          });
        });

        describe("when `query` fails and `update` succeeds", () => {
          beforeEach(() => {
            params = {
              faster: "query",
              resolution: undefined,
              queryError: true,
            };
          });

          it("should ignore `update` response and not call `onLoad`", async () => {
            const { mockParams, onLoadMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onLoadMock).not.toHaveBeenCalled();
          });

          it("should ignore `update` response and call `onError` with query error", async () => {
            const { mockParams, onErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(1);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: false,
              error: queryErrorObj,
              identity: mockIdentity,
            });
          });

          it("should ignore `update` response and log the console error with `query` error", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenNthCalledWith(1, queryErrorObj);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate({
              ...mockParams,
              onCertifiedError: undefined,
            });

            expect(console.error).not.toHaveBeenCalled();
          });
        });

        describe("when `query` and `update` both fail", () => {
          beforeEach(() => {
            params = {
              faster: "query",
              resolution: undefined,
              queryError: true,
              updateError: true,
            };
          });

          it("should call `onError` only with `query` error", async () => {
            const { mockParams, onErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(1);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: false,
              error: queryErrorObj,
              identity: mockIdentity,
            });
          });

          it("should not call `onCertifiedError`", async () => {
            const { mockParams, onCertifiedErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).not.toHaveBeenCalled();
          });

          it("should log the console error only with `query` error", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenNthCalledWith(1, queryErrorObj);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate({
              ...mockParams,
              onCertifiedError: undefined,
            });

            expect(console.error).not.toHaveBeenCalled();
          });
        });
      });

      describe("resolution: `all_settled`", () => {
        describe("when `query` and `update` both succeed", () => {
          beforeEach(() => {
            params = { faster: "query", resolution: "all_settled" };
          });

          it("should call `onLoad` with both responses", async () => {
            const { mockParams, onLoadMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onLoadMock).toHaveBeenCalledTimes(2);
            expect(onLoadMock).toHaveBeenNthCalledWith(1, {
              certified: false,
              response: queryResponse,
            });
            expect(onLoadMock).toHaveBeenNthCalledWith(2, {
              certified: true,
              response: updateResponse,
            });
          });
        });

        describe("when `query` succeeds and `update` fails", () => {
          beforeEach(() => {
            params = {
              faster: "query",
              resolution: "all_settled",
              updateError: true,
            };
          });

          it("should call `onLoad` with `query` response", async () => {
            const { mockParams, onLoadMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onLoadMock).toHaveBeenCalledTimes(1);
            expect(onLoadMock).toHaveBeenNthCalledWith(1, {
              certified: false,
              response: queryResponse,
            });
          });

          it("should call `onError` with `update` error", async () => {
            const { mockParams, onErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(1);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              error: updateErrorObj,
              identity: mockIdentity,
            });
          });

          it("should call `onCertifiedError` with `update` error", async () => {
            const { mockParams, onCertifiedErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).toHaveBeenCalledTimes(1);
            expect(onCertifiedErrorMock).toHaveBeenNthCalledWith(1, {
              error: updateErrorObj,
              identity: mockIdentity,
            });
          });

          it("should log the console error with `update` error", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenNthCalledWith(1, updateErrorObj);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate({
              ...mockParams,
              onCertifiedError: undefined,
            });

            expect(console.error).not.toHaveBeenCalled();
          });
        });

        describe("when `query` fails and `update` succeeds", () => {
          beforeEach(() => {
            params = {
              faster: "query",
              resolution: "all_settled",
              queryError: true,
            };
          });

          it("should call `onLoad` with `update` response", async () => {
            const { mockParams, onLoadMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onLoadMock).toHaveBeenCalledTimes(1);
            expect(onLoadMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              response: updateResponse,
            });
          });

          it("should call `onError` with `query` error", async () => {
            const { mockParams, onErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(1);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: false,
              error: queryErrorObj,
              identity: mockIdentity,
            });
          });

          it("should not call `onCertifiedError`", async () => {
            const { mockParams, onCertifiedErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).not.toHaveBeenCalled();
          });

          it("should log the console error with `query` error", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenNthCalledWith(1, queryErrorObj);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate({
              ...mockParams,
              onCertifiedError: undefined,
            });

            expect(console.error).not.toHaveBeenCalled();
          });
        });

        describe("when `query` and `update` both fail", () => {
          beforeEach(() => {
            params = {
              faster: "query",
              resolution: "all_settled",
              queryError: true,
              updateError: true,
            };
          });

          it("should call `onError` with both errors", async () => {
            const { mockParams, onErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(2);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: false,
              error: queryErrorObj,
              identity: mockIdentity,
            });
            expect(onErrorMock).toHaveBeenNthCalledWith(2, {
              certified: true,
              error: updateErrorObj,
              identity: mockIdentity,
            });
          });

          it("should call `onCertifiedError` with `update` error", async () => {
            const { mockParams, onCertifiedErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).toHaveBeenCalledTimes(1);
            expect(onCertifiedErrorMock).toHaveBeenNthCalledWith(1, {
              error: updateErrorObj,
              identity: mockIdentity,
            });
          });

          it("should log the console error with both errors", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(2);
            expect(console.error).toHaveBeenNthCalledWith(1, queryErrorObj);
            expect(console.error).toHaveBeenNthCalledWith(2, updateErrorObj);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate({
              ...mockParams,
              onCertifiedError: undefined,
            });

            expect(console.error).not.toHaveBeenCalled();
          });
        });
      });
    });

    describe("unlikely scenario: `query` is slower than `update`", () => {
      describe("resolution: `race` (default)", () => {
        describe("when `query` and `update` both succeed", () => {
          beforeEach(() => {
            params = { faster: "update", resolution: undefined };
          });

          it("should call `onLoad` only with `update` response", async () => {
            const { mockParams, onLoadMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onLoadMock).toHaveBeenCalledTimes(1);
            expect(onLoadMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              response: updateResponse,
            });
          });
        });

        describe("when `query` succeeds and `update` fails", () => {
          beforeEach(() => {
            params = {
              faster: "update",
              resolution: undefined,
              updateError: true,
            };
          });

          it("should ignore `query` response and not call `onLoad`", async () => {
            const { mockParams, onLoadMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onLoadMock).not.toHaveBeenCalled();
          });

          it("should ignore `query` response and call `onError` with `update` error", async () => {
            const { mockParams, onErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(1);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              error: updateErrorObj,
              identity: mockIdentity,
            });
          });

          it("should ignore `query` response and call `onCertifiedError` with `update` error", async () => {
            const { mockParams, onCertifiedErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).toHaveBeenCalledTimes(1);
            expect(onCertifiedErrorMock).toHaveBeenNthCalledWith(1, {
              error: updateErrorObj,
              identity: mockIdentity,
            });
          });

          it("should ignore `query` response and log the console error with `update` error", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenNthCalledWith(1, updateErrorObj);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate({
              ...mockParams,
              onCertifiedError: undefined,
            });

            expect(console.error).not.toHaveBeenCalled();
          });
        });

        describe("when `query` fails and `update` succeeds", () => {
          beforeEach(() => {
            params = {
              faster: "update",
              resolution: undefined,
              queryError: true,
            };
          });

          it("should ignore `query` error and call `onLoad` with `update` response", async () => {
            const { mockParams, onLoadMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onLoadMock).toHaveBeenCalledTimes(1);
            expect(onLoadMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              response: updateResponse,
            });
          });

          it("should ignore `query` error and not call `onError`", async () => {
            const { mockParams, onErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onErrorMock).not.toHaveBeenCalled();
          });

          it("should ignore `query` error and not log the console error", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(console.error).not.toHaveBeenCalled();
          });
        });

        describe("when `query` and `update` both fail", () => {
          beforeEach(() => {
            params = {
              faster: "update",
              resolution: undefined,
              queryError: true,
              updateError: true,
            };
          });

          it("should call `onError` only with `update` error", async () => {
            const { mockParams, onErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(1);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              error: updateErrorObj,
              identity: mockIdentity,
            });
          });

          it("should call `onCertifiedError` with `update` error", async () => {
            const { mockParams, onCertifiedErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).toHaveBeenCalledTimes(1);
            expect(onCertifiedErrorMock).toHaveBeenNthCalledWith(1, {
              error: updateErrorObj,
              identity: mockIdentity,
            });
          });

          it("should log the console error only with `update` error", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenNthCalledWith(1, updateErrorObj);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate({
              ...mockParams,
              onCertifiedError: undefined,
            });

            expect(console.error).not.toHaveBeenCalled();
          });
        });
      });

      describe("resolution: `all_settled`", () => {
        describe("when `query` and `update` both succeed", () => {
          beforeEach(() => {
            params = { faster: "update", resolution: "all_settled" };
          });

          it("should call `onLoad` only with `update` response", async () => {
            const { mockParams, onLoadMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onLoadMock).toHaveBeenCalledTimes(1);
            expect(onLoadMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              response: updateResponse,
            });
          });
        });

        describe("when `query` succeeds and `update` fails", () => {
          beforeEach(() => {
            params = {
              faster: "update",
              resolution: "all_settled",
              updateError: true,
            };
          });

          it("should ignore `query` response and not call `onLoad`", async () => {
            const { mockParams, onLoadMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onLoadMock).not.toHaveBeenCalled();
          });

          it("should call `onError` with `update` error", async () => {
            const { mockParams, onErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(1);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              error: updateErrorObj,
              identity: mockIdentity,
            });
          });

          it("should call `onCertifiedError` with `update` error", async () => {
            const { mockParams, onCertifiedErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).toHaveBeenCalledTimes(1);
            expect(onCertifiedErrorMock).toHaveBeenNthCalledWith(1, {
              error: updateErrorObj,
              identity: mockIdentity,
            });
          });

          it("should log the console error with `update` error", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenNthCalledWith(1, updateErrorObj);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate({
              ...mockParams,
              onCertifiedError: undefined,
            });

            expect(console.error).not.toHaveBeenCalled();
          });
        });

        describe("when `query` fails and `update` succeeds", () => {
          beforeEach(() => {
            params = {
              faster: "update",
              resolution: "all_settled",
              queryError: true,
            };
          });

          it("should call `onLoad` with `update` response", async () => {
            const { mockParams, onLoadMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onLoadMock).toHaveBeenCalledTimes(1);
            expect(onLoadMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              response: updateResponse,
            });
          });

          it("should ignore `query` error and not call `onError`", async () => {
            const { mockParams, onErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onErrorMock).not.toHaveBeenCalled();
          });

          it("should not call `onCertifiedError`", async () => {
            const { mockParams, onCertifiedErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).not.toHaveBeenCalled();
          });

          it("should ignore `query` error and not log the console error", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(console.error).not.toHaveBeenCalled();
          });
        });

        describe("when `query` and `update` both fail", () => {
          beforeEach(() => {
            params = {
              faster: "update",
              resolution: "all_settled",
              queryError: true,
              updateError: true,
            };
          });

          it("should call `onError` only with `update` error", async () => {
            const { mockParams, onErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(1);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              error: updateErrorObj,
              identity: mockIdentity,
            });
          });

          it("should call `onCertifiedError` with `update` error", async () => {
            const { mockParams, onCertifiedErrorMock } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).toHaveBeenCalledTimes(1);
            expect(onCertifiedErrorMock).toHaveBeenNthCalledWith(1, {
              error: updateErrorObj,
              identity: mockIdentity,
            });
          });

          it("should log the console error only with `update` error", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenNthCalledWith(1, updateErrorObj);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
            const { mockParams } = createMockParams();

            await queryAndUpdate({
              ...mockParams,
              onCertifiedError: undefined,
            });

            expect(console.error).not.toHaveBeenCalled();
          });
        });
      });
    });

    // it("should only perform a query when strategy is 'query'", async () => {
    //   requestMock.mockResolvedValueOnce(queryResponse);
    //
    //   await queryAndUpdate({
    //     request: requestMock,
    //     onLoad: onLoadMock,
    //     onError: onErrorMock,
    //     onCertifiedError: onCertifiedErrorMock,
    //     strategy: "query",
    //     identity: undefined,
    //     resolution: "all_settled",
    //   });
    //
    //   expect(requestMock).toHaveBeenCalledTimes(1);
    //   expect(requestMock).toHaveBeenCalledWith({
    //     certified: false,
    //     identity: undefined,
    //   });
    // });
    //
    // it("should only perform an update when strategy is 'update'", async () => {
    //   requestMock.mockResolvedValueOnce(updateResponse);
    //
    //   await queryAndUpdate({
    //     request: requestMock,
    //     onLoad: onLoadMock,
    //     onError: onErrorMock,
    //     onCertifiedError: onCertifiedErrorMock,
    //     strategy: "update",
    //     identity: undefined,
    //     resolution: "all_settled",
    //   });
    //
    //   expect(requestMock).toHaveBeenCalledTimes(1);
    //   expect(requestMock).toHaveBeenCalledWith({
    //     certified: true,
    //     identity: undefined,
    //   });
    // });

    // it("should work with null identity", async () => {
    //   requestMock.mockResolvedValueOnce(queryResponse);
    //
    //   await queryAndUpdate({
    //     request: requestMock,
    //     onLoad: onLoadMock,
    //     onError: onErrorMock,
    //     onCertifiedError: onCertifiedErrorMock,
    //     strategy: "query",
    //     identity: null,
    //     resolution: "all_settled",
    //   });
    //
    //   expect(requestMock).toHaveBeenCalledWith({
    //     certified: false,
    //     identity: null,
    //   });
    // });
  });
});
