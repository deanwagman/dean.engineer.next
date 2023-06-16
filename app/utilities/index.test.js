import { debounce } from "./index";

jest.useFakeTimers();

describe("debounce", () => {
  it("delays the function call", () => {
    const callback = jest.fn();
    const debounced = debounce(callback, 500);

    debounced("Hello");

    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(500);

    expect(callback).toBeCalledWith("Hello");
  });

  it("debounces the function call", () => {
    const callback = jest.fn();
    const debounced = debounce(callback, 500);

    debounced("Hello");
    debounced("World");

    jest.advanceTimersByTime(500);

    expect(callback).not.toBeCalledWith("Hello");
    expect(callback).toBeCalledWith("World");
  });
});
