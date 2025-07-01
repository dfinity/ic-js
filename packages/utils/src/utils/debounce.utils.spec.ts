import type { MockedFunction } from "vitest";
import { debounce } from "./debounce.utils";

describe("debounce-utils", () => {
  let callback: MockedFunction<() => void>;

  beforeAll(() =>
    vi.spyOn(console, "error").mockImplementation(() => undefined),
  );

  afterAll(() => vi.resetAllMocks());

  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(global, "setTimeout");
    callback = vi.fn();
  });

  afterEach(() => vi.useRealTimers());

  it("should debounce function with timeout", () => {
    const testDebounce = debounce(callback, 100);

    testDebounce();
    testDebounce();
    testDebounce();

    expect(setTimeout).toHaveBeenCalledTimes(3);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100);
    expect(callback).not.toBeCalled();

    vi.runAllTimers();

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should debounce one function call", () => {
    debounce(callback)();

    expect(callback).not.toBeCalled();

    vi.runAllTimers();

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should debounce multiple functions call", () => {
    const anotherCallback = vi.fn();

    const test = debounce(anotherCallback);
    test();
    test();
    test();

    vi.runAllTimers();

    expect(anotherCallback).toBeCalled();
    expect(anotherCallback).toHaveBeenCalledTimes(1);
  });
});
