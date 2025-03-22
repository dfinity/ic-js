/**
 * Creates a debounced version of the provided function.
 *
 * The debounced function postpones its execution until after a certain amount of time
 * has elapsed since the last time it was invoked. This is useful for limiting the rate
 * at which a function is called (e.g. in response to user input or events).
 *
 * @param {Function} func - The function to debounce. It will only be called after no new calls happen within the specified timeout.
 * @param {number} [timeout=300] - The debounce delay in milliseconds. Defaults to 300ms if not provided or invalid.
 * @returns {(args: unknown[]) => void} A debounced version of the original function.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const debounce = (func: Function, timeout?: number) => {
  let timer: NodeJS.Timer | undefined;

  return (...args: unknown[]) => {
    const next = () => func(...args);

    if (timer) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore TypeScript global and window confusion even if we are using @types/node
      clearTimeout(timer);
    }

    timer = setTimeout(
      next,
      timeout !== undefined && timeout > 0 ? timeout : 300,
    );
  };
};
