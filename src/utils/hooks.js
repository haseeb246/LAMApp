import { useEffect } from "react";

export const useMountEffect = (runnable) => useEffect(runnable, []);

export const useTimeout = (
  callback,
  timeout = 0,
  { renderCancel = false } = {},
) => {
  let timeoutId;

  const cancel = () => timeoutId && clearTimeout(timeoutId);

  useEffect(
    () => {
      timeoutId = setTimeout(callback, timeout);

      return cancel;
    },
    !renderCancel
      ? [setTimeout, clearTimeout]
      : [callback, timeout, setTimeout, clearTimeout],
  );

  return cancel;
};
