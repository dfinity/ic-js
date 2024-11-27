import type { CallConfig } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { mockCanisterId } from "../ic-management.mock";
import { transform } from "./transform.utils";

describe("transform", () => {
  it("should map the effectiveCanisterId when a valid canister_id is provided as principal in the request", () => {
    const methodName = "someMethod";
    const args = [{ canister_id: mockCanisterId }];
    const callConfig: CallConfig = {};

    const result = transform(methodName, args, callConfig);

    expect(result).toEqual({
      effectiveCanisterId: mockCanisterId,
    });
  });

  it("should map the effectiveCanisterId when a valid canister_id is provided as string in the request", () => {
    const methodName = "someMethod";
    const args = [{ canister_id: mockCanisterId.toText() }];
    const callConfig: CallConfig = {};

    const result = transform(methodName, args, callConfig);

    expect(result).toEqual({
      effectiveCanisterId: mockCanisterId,
    });
  });

  it("should return effectiveCanisterId aaaaa-aa when args is empty", () => {
    const methodName = "someMethod";
    const args: unknown[] = [];
    const callConfig: CallConfig = {};

    const result = transform(methodName, args, callConfig);

    expect(result).toEqual({
      effectiveCanisterId: Principal.fromHex(""),
    });
  });

  it("should return effectiveCanisterId aaaaa-aa when canister_id is missing in the first argument", () => {
    const methodName = "someMethod";
    const args = [{}];
    const callConfig: CallConfig = {};

    const result = transform(methodName, args, callConfig);

    expect(result).toEqual({
      effectiveCanisterId: Principal.fromHex(""),
    });
  });

  it("should return effectiveCanisterId aaaaa-aa when the first argument is not an object", () => {
    const methodName = "someMethod";
    const args = [42];
    const callConfig: CallConfig = {};

    const result = transform(methodName, args, callConfig);

    expect(result).toEqual({
      effectiveCanisterId: Principal.fromHex(""),
    });
  });

  it("should throw an error if canister_id is provided in the request but is not a valid principal or representation", () => {
    const methodName = "someMethod";
    const args = [{ canister_id: 12345 }];
    const callConfig: CallConfig = {};

    expect(() => transform(methodName, args, callConfig)).toThrow();
  });
});
