import { expect } from "@jest/globals";
import { mockIdentity } from "../mocks/identity.mock";
import type {
  QueryAndUpdateParams,
  QueryAndUpdateRequestParams,
} from "./query";
import { queryAndUpdate } from "./query";

describe("query", () => {
  describe("queryAndUpdate", () => {
    const requestMock: jest.Mock = jest.fn();
    const onLoadMock: jest.Mock = jest.fn();
    const onErrorMock: jest.Mock = jest.fn();
    const onCertifiedErrorMock: jest.Mock = jest.fn();

    const delay = 100;

    const mockBaseParams: QueryAndUpdateParams<string> = {
      request: requestMock,
      onLoad: onLoadMock,
      onError: onErrorMock,
      onCertifiedError: onCertifiedErrorMock,
      identity: mockIdentity,
    };

    const queryResponse = "query response";
    const updateResponse = "update response";

    const queryError = new Error("Query failed");
    const updateError = new Error("Update failed");

    const mockQueryResult: jest.Mock = jest.fn();
    const mockUpdateResult: jest.Mock = jest.fn();

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

    beforeEach(() => {
      jest.resetAllMocks();

      // We mock console just to avoid unnecessary logs while running the tests
      jest.spyOn(console, "error").mockImplementation(() => {});
    });

    it("should call request with `certified: false` and then with `certified: true`", async () => {
      requestMock.mockResolvedValue("response");

      await queryAndUpdate(mockBaseParams);

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

    it("should not wait for the slowest request to finish with `race` resolution", async () => {
      requestMock
        .mockResolvedValueOnce("response-1")
        .mockResolvedValueOnce(
          new Promise((resolve) =>
            setTimeout(() => resolve("response-2"), delay),
          ),
        );

      const { resolution: _, ...mockParams } = mockBaseParams;

      const start = Date.now();
      await queryAndUpdate(mockParams);
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(delay);
    });

    it("should wait for all requests to finish with `all_settled` resolution", async () => {
      requestMock
        .mockResolvedValueOnce("response-1")
        .mockResolvedValueOnce(
          new Promise((resolve) =>
            setTimeout(() => resolve("response-2"), delay),
          ),
        );

      const mockParams = {
        ...mockBaseParams,
        resolution: "all_settled" as const,
      };

      const start = Date.now();
      await queryAndUpdate(mockParams);
      const duration = Date.now() - start;

      expect(duration).toBeGreaterThanOrEqual(delay);
    });

    describe("when both requests succeed", () => {
      beforeEach(() => {
        jest.resetAllMocks();

        requestMock.mockResolvedValue("response");
      });

      it("should not call `onError`", async () => {
        await queryAndUpdate(mockBaseParams);

        expect(onErrorMock).not.toHaveBeenCalled();
      });

      it("should not call `onCertifiedError`", async () => {
        await queryAndUpdate(mockBaseParams);

        expect(onCertifiedErrorMock).not.toHaveBeenCalled();
      });

      it("should not log the console error", async () => {
        await queryAndUpdate(mockBaseParams);

        expect(console.error).not.toHaveBeenCalled();
      });
    });

    describe("when both requests fail", () => {
      beforeEach(() => {
        jest.resetAllMocks();

        requestMock.mockRejectedValue(new Error("Request failed"));
      });

      it("should not call `onLoad`", async () => {
        await queryAndUpdate(mockBaseParams);

        expect(onLoadMock).not.toHaveBeenCalled();
      });
    });

    describe("likely scenario: `query` is faster than `update`", () => {
      beforeEach(() => {
        jest.resetAllMocks();

        requestMock.mockImplementation(mockRequestFasterQuery);
      });

      describe("resolution: `race` (default)", () => {
        const { resolution: _, ...mockParams } = mockBaseParams;

        describe("when `query` and `update` both succeed", () => {
          beforeEach(() => {
            jest.clearAllMocks();

            mockQueryResult.mockResolvedValueOnce(queryResponse);
            mockUpdateResult.mockResolvedValueOnce(updateResponse);
          });

          it("should call `onLoad` only with `query` response", async () => {
            await queryAndUpdate(mockParams);

            expect(onLoadMock).toHaveBeenCalledTimes(1);
            expect(onLoadMock).toHaveBeenNthCalledWith(1, {
              certified: false,
              response: queryResponse,
            });
          });
        });

        describe("when `query` succeeds and `update` fails", () => {
          beforeEach(async () => {
            jest.clearAllMocks();

            mockQueryResult.mockResolvedValueOnce(queryResponse);
            mockUpdateResult.mockRejectedValueOnce(updateError);
          });

          it("should ignore `update` error and call `onLoad` with `query` response", async () => {
            await queryAndUpdate(mockParams);

            expect(onLoadMock).toHaveBeenCalledTimes(1);
            expect(onLoadMock).toHaveBeenNthCalledWith(1, {
              certified: false,
              response: queryResponse,
            });
          });

          it("should ignore `update` error and not call `onError`", async () => {
            await queryAndUpdate(mockParams);

            expect(onErrorMock).not.toHaveBeenCalled();
          });

          it("should ignore `update` error and not call `onCertifiedError`", async () => {
            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).not.toHaveBeenCalled();
          });

          it("should ignore `update` error and not log the console error", async () => {
            await queryAndUpdate(mockParams);

            expect(console.error).not.toHaveBeenCalled();
          });
        });

        describe("when `query` fails and `update` succeeds", () => {
          beforeEach(async () => {
            jest.clearAllMocks();

            mockQueryResult.mockRejectedValueOnce(queryError);
            mockUpdateResult.mockResolvedValueOnce(updateResponse);
          });

          it("should ignore `update` response and not call `onLoad`", async () => {
            await queryAndUpdate(mockParams);

            expect(onLoadMock).not.toHaveBeenCalled();
          });

          it("should ignore `update` response and call `onError` with query error", async () => {
            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(1);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: false,
              error: queryError,
              identity: mockIdentity,
            });
          });

          it("should ignore `update` response and log the console error with `query` error", async () => {
            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenNthCalledWith(1, queryError);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
            await queryAndUpdate({
              ...mockParams,
              onCertifiedError: undefined,
            });

            expect(console.error).not.toHaveBeenCalled();
          });
        });

        describe("when `query` and `update` both fail", () => {
          beforeEach(() => {
            jest.clearAllMocks();

            mockQueryResult.mockRejectedValueOnce(queryError);
            mockUpdateResult.mockRejectedValueOnce(updateError);
          });

          it("should call `onError` only with `query` error", async () => {
            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(1);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: false,
              error: queryError,
              identity: mockIdentity,
            });
          });

          it("should not call `onCertifiedError`", async () => {
            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).not.toHaveBeenCalled();
          });

          it("should log the console error only with `query` error", async () => {
            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenNthCalledWith(1, queryError);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
            await queryAndUpdate({
              ...mockParams,
              onCertifiedError: undefined,
            });

            expect(console.error).not.toHaveBeenCalled();
          });
        });
      });

      describe("resolution: `all_settled`", () => {
        const mockParams = {
          ...mockBaseParams,
          resolution: "all_settled" as const,
        };

        describe("when `query` and `update` both succeed", () => {
          beforeEach(() => {
            jest.clearAllMocks();

            mockQueryResult.mockResolvedValueOnce(queryResponse);
            mockUpdateResult.mockResolvedValueOnce(updateResponse);
          });

          it("should call `onLoad` with both responses", async () => {
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
          beforeEach(async () => {
            jest.clearAllMocks();

            mockQueryResult.mockResolvedValueOnce(queryResponse);
            mockUpdateResult.mockRejectedValueOnce(updateError);
          });

          it("should call `onLoad` with `query` response", async () => {
            await queryAndUpdate(mockParams);

            expect(onLoadMock).toHaveBeenCalledTimes(1);
            expect(onLoadMock).toHaveBeenNthCalledWith(1, {
              certified: false,
              response: queryResponse,
            });
          });

          it("should call `onError` with `update` error", async () => {
            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(1);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              error: updateError,
              identity: mockIdentity,
            });
          });

          it("should call `onCertifiedError` with `update` error", async () => {
            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).toHaveBeenCalledTimes(1);
            expect(onCertifiedErrorMock).toHaveBeenNthCalledWith(1, {
              error: updateError,
              identity: mockIdentity,
            });
          });

          it("should log the console error with `update` error", async () => {
            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenNthCalledWith(1, updateError);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
            await queryAndUpdate({
              ...mockParams,
              onCertifiedError: undefined,
            });

            expect(console.error).not.toHaveBeenCalled();
          });
        });

        describe("when `query` fails and `update` succeeds", () => {
          beforeEach(() => {
            jest.clearAllMocks();

            mockQueryResult.mockRejectedValueOnce(queryError);
            mockUpdateResult.mockResolvedValueOnce(updateResponse);
          });

          it("should call `onLoad` with `update` response", async () => {
            await queryAndUpdate(mockParams);

            expect(onLoadMock).toHaveBeenCalledTimes(1);
            expect(onLoadMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              response: updateResponse,
            });
          });

          it("should call `onError` with `query` error", async () => {
            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(1);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: false,
              error: queryError,
              identity: mockIdentity,
            });
          });

          it("should not call `onCertifiedError`", async () => {
            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).not.toHaveBeenCalled();
          });

          it("should log the console error with `query` error", async () => {
            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenNthCalledWith(1, queryError);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
            await queryAndUpdate({
              ...mockParams,
              onCertifiedError: undefined,
            });

            expect(console.error).not.toHaveBeenCalled();
          });
        });

        describe("when `query` and `update` both fail", () => {
          beforeEach(() => {
            jest.clearAllMocks();

            mockQueryResult.mockRejectedValueOnce(queryError);
            mockUpdateResult.mockRejectedValueOnce(updateError);
          });

          it("should call `onError` with both errors", async () => {
            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(2);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: false,
              error: queryError,
              identity: mockIdentity,
            });
            expect(onErrorMock).toHaveBeenNthCalledWith(2, {
              certified: true,
              error: updateError,
              identity: mockIdentity,
            });
          });

          it("should call `onCertifiedError` with `update` error", async () => {
            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).toHaveBeenCalledTimes(1);
            expect(onCertifiedErrorMock).toHaveBeenNthCalledWith(1, {
              error: updateError,
              identity: mockIdentity,
            });
          });

          it("should log the console error with both errors", async () => {
            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(2);
            expect(console.error).toHaveBeenNthCalledWith(1, queryError);
            expect(console.error).toHaveBeenNthCalledWith(2, updateError);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
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
      beforeEach(() => {
        jest.resetAllMocks();

        requestMock.mockImplementation(mockRequestFasterUpdate);
      });

      describe("resolution: `race` (default)", () => {
        const { resolution: _, ...mockParams } = mockBaseParams;

        describe("when `query` and `update` both succeed", () => {
          beforeEach(() => {
            jest.clearAllMocks();

            mockQueryResult.mockResolvedValueOnce(queryResponse);
            mockUpdateResult.mockResolvedValueOnce(updateResponse);
          });

          it("should call `onLoad` only with `update` response", async () => {
            await queryAndUpdate(mockParams);

            expect(onLoadMock).toHaveBeenCalledTimes(1);
            expect(onLoadMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              response: updateResponse,
            });
          });
        });

        describe("when `query` succeeds and `update` fails", () => {
          beforeEach(async () => {
            jest.clearAllMocks();

            mockQueryResult.mockResolvedValueOnce(queryResponse);
            mockUpdateResult.mockRejectedValueOnce(updateError);
          });

          it("should ignore `query` response and not call `onLoad`", async () => {
            await queryAndUpdate(mockParams);

            expect(onLoadMock).not.toHaveBeenCalled();
          });

          it("should ignore `query` response and call `onError` with `update` error", async () => {
            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(1);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              error: updateError,
              identity: mockIdentity,
            });
          });

          it("should ignore `query` response and call `onCertifiedError` with `update` error", async () => {
            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).toHaveBeenCalledTimes(1);
            expect(onCertifiedErrorMock).toHaveBeenNthCalledWith(1, {
              error: updateError,
              identity: mockIdentity,
            });
          });

          it("should ignore `query` response and log the console error with `update` error", async () => {
            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenNthCalledWith(1, updateError);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
            await queryAndUpdate({
              ...mockParams,
              onCertifiedError: undefined,
            });

            expect(console.error).not.toHaveBeenCalled();
          });
        });

        describe("when `query` fails and `update` succeeds", () => {
          beforeEach(async () => {
            jest.clearAllMocks();

            mockQueryResult.mockRejectedValueOnce(queryError);
            mockUpdateResult.mockResolvedValueOnce(updateResponse);
          });

          it("should ignore `query` error and call `onLoad` with `update` response", async () => {
            await queryAndUpdate(mockParams);

            expect(onLoadMock).toHaveBeenCalledTimes(1);
            expect(onLoadMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              response: updateResponse,
            });
          });

          it("should ignore `query` error and not call `onError`", async () => {
            await queryAndUpdate(mockParams);

            expect(onErrorMock).not.toHaveBeenCalled();
          });

          it("should ignore `query` error and not log the console error", async () => {
            await queryAndUpdate(mockParams);

            expect(console.error).not.toHaveBeenCalled();
          });
        });

        describe("when `query` and `update` both fail", () => {
          beforeEach(() => {
            jest.clearAllMocks();

            mockQueryResult.mockRejectedValueOnce(queryError);
            mockUpdateResult.mockRejectedValueOnce(updateError);
          });

          it("should call `onError` only with `update` error", async () => {
            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(1);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              error: updateError,
              identity: mockIdentity,
            });
          });

          it("should call `onCertifiedError` with `update` error", async () => {
            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).toHaveBeenCalledTimes(1);
            expect(onCertifiedErrorMock).toHaveBeenNthCalledWith(1, {
              error: updateError,
              identity: mockIdentity,
            });
          });

          it("should log the console error only with `update` error", async () => {
            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenNthCalledWith(1, updateError);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
            await queryAndUpdate({
              ...mockParams,
              onCertifiedError: undefined,
            });

            expect(console.error).not.toHaveBeenCalled();
          });
        });
      });

      describe("resolution: `all_settled`", () => {
        const mockParams = {
          ...mockBaseParams,
          resolution: "all_settled" as const,
        };

        describe("when `query` and `update` both succeed", () => {
          beforeEach(() => {
            jest.clearAllMocks();

            mockQueryResult.mockResolvedValueOnce(queryResponse);
            mockUpdateResult.mockResolvedValueOnce(updateResponse);
          });

          it("should call `onLoad` only with `update` response", async () => {
            await queryAndUpdate(mockParams);

            expect(onLoadMock).toHaveBeenCalledTimes(1);
            expect(onLoadMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              response: updateResponse,
            });
          });
        });

        describe("when `query` succeeds and `update` fails", () => {
          beforeEach(async () => {
            jest.clearAllMocks();

            mockQueryResult.mockResolvedValueOnce(queryResponse);
            mockUpdateResult.mockRejectedValueOnce(updateError);
          });

          it("should ignore `query` response and not call `onLoad`", async () => {
            await queryAndUpdate(mockParams);

            expect(onLoadMock).not.toHaveBeenCalled();
          });

          it("should call `onError` with `update` error", async () => {
            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(1);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              error: updateError,
              identity: mockIdentity,
            });
          });

          it("should call `onCertifiedError` with `update` error", async () => {
            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).toHaveBeenCalledTimes(1);
            expect(onCertifiedErrorMock).toHaveBeenNthCalledWith(1, {
              error: updateError,
              identity: mockIdentity,
            });
          });

          it("should log the console error with `update` error", async () => {
            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenNthCalledWith(1, updateError);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
            await queryAndUpdate({
              ...mockParams,
              onCertifiedError: undefined,
            });

            expect(console.error).not.toHaveBeenCalled();
          });
        });

        describe("when `query` fails and `update` succeeds", () => {
          beforeEach(() => {
            jest.clearAllMocks();

            mockQueryResult.mockRejectedValueOnce(queryError);
            mockUpdateResult.mockResolvedValueOnce(updateResponse);
          });

          it("should call `onLoad` with `update` response", async () => {
            await queryAndUpdate(mockParams);

            expect(onLoadMock).toHaveBeenCalledTimes(1);
            expect(onLoadMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              response: updateResponse,
            });
          });

          it("should ignore `query` error and not call `onError`", async () => {
            await queryAndUpdate(mockParams);

            expect(onErrorMock).not.toHaveBeenCalled();
          });

          it("should not call `onCertifiedError`", async () => {
            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).not.toHaveBeenCalled();
          });

          it("should ignore `query` error and not log the console error", async () => {
            await queryAndUpdate(mockParams);

            expect(console.error).not.toHaveBeenCalled();
          });
        });

        describe("when `query` and `update` both fail", () => {
          beforeEach(() => {
            jest.clearAllMocks();

            mockQueryResult.mockRejectedValueOnce(queryError);
            mockUpdateResult.mockRejectedValueOnce(updateError);
          });

          it("should call `onError` only with `update` error", async () => {
            await queryAndUpdate(mockParams);

            expect(onErrorMock).toHaveBeenCalledTimes(1);
            expect(onErrorMock).toHaveBeenNthCalledWith(1, {
              certified: true,
              error: updateError,
              identity: mockIdentity,
            });
          });

          it("should call `onCertifiedError` with `update` error", async () => {
            await queryAndUpdate(mockParams);

            expect(onCertifiedErrorMock).toHaveBeenCalledTimes(1);
            expect(onCertifiedErrorMock).toHaveBeenNthCalledWith(1, {
              error: updateError,
              identity: mockIdentity,
            });
          });

          it("should log the console error only with `update` error", async () => {
            await queryAndUpdate(mockParams);

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenNthCalledWith(1, updateError);
          });

          it("should not log the console error when `onCertifiedError` is nullish", async () => {
            await queryAndUpdate({
              ...mockParams,
              onCertifiedError: undefined,
            });

            expect(console.error).not.toHaveBeenCalled();
          });
        });
      });
    });

    describe("when `update` is faster than `query`", () => {
      beforeEach(() => {
        jest.resetAllMocks();

        requestMock.mockImplementation(mockRequestFasterUpdate);
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
