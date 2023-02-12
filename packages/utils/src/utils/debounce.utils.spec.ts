import { debounce } from "./debounce.utils";

describe("debounce-utils", () => {
  let callback: jest.Mock;

  beforeAll(() =>
    jest.spyOn(console, "error").mockImplementation(() => undefined)
  );

  afterAll(() => jest.resetAllMocks());

  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    callback = jest.fn();
  });

  afterEach(() => jest.useRealTimers());

  it("should debounce function with timeout", () => {
    const testDebounce = debounce(callback, 100);

    testDebounce();
    testDebounce();
    testDebounce();

    expect(setTimeout).toHaveBeenCalledTimes(3);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100);
    expect(callback).not.toBeCalled();

    jest.runAllTimers();

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should debounce one function call", () => {
    debounce(callback)();

    expect(callback).not.toBeCalled();

    jest.runAllTimers();

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should debounce multiple functions call", () => {
    const anotherCallback = jest.fn();

    const test = debounce(anotherCallback);
    test();
    test();
    test();

    jest.runAllTimers();

    expect(anotherCallback).toBeCalled();
    expect(anotherCallback).toHaveBeenCalledTimes(1);
  });
});
