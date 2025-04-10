export const createObserver = () => {
  const listener = new Set();
  const subscribe = (fn) => listener.add(fn);
  const notify = () => listener.forEach((listener) => listener());
  return { subscribe, notify };
};
