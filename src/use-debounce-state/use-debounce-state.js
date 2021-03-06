import { useState, useRef } from "atomico";
/**
 * Generates a bottleneck in the definition of the state
 * @template T
 * @param {number} delay
 * @param {T} [initialState]
 * @return {[T extends (...args:any[])=>infer R ? R : T, (current: T extends (...args:any[])=>infer R ? R : T)=>void]}
 */
export function useDebounceState(delay, initialState) {
  const [state, setState] = useState(initialState);
  const ref = useRef();
  return [
    state,
    (current) => {
      state.current = current;
      if (!ref.prevent) {
        ref.prevent = true;
        setTimeout(() => {
          state.prevent = false;
          setState(state.current);
        }, delay);
      }
    },
  ];
}
