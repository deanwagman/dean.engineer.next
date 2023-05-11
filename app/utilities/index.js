export const debounce = (fn, delay) => {
  let timeoutID = null;
  return (...args) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
