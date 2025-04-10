import { createObserver } from "./createObserver";

export const createStore = (initialStore) => {
  const { subscribe, notify } = createObserver();
  let state = { ...initialStore };

  const setState = (newState) => {
    state = { ...state, ...newState }; // 기존 state유지하고 새로운게 들어오면 새로운것만 바꾸기
    notify();
  };
  const getState = () => ({ ...state });
  return { setState, getState, subscribe };
};
