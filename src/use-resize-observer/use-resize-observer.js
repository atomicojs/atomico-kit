import { useEffect, useRef, useState } from "atomico";

const listenersId = Symbol();

const resizeObserver = new ResizeObserver((entries) =>
  entries.forEach(({ contentRect, target }) => {
    const rect = contentRect.toJSON();
    const listeners = target[listenersId];
    for (const listener of listeners) listener(rect);
  })
);

/**
 * Observe the ResizeObserver state of a reference
 * @example
 * ```js
 * useResizeObserver(ref, (rect)=>{
 *  console.log(rect.width)
 * });
 * ```
 * @param {import("atomico").Ref} ref
 * @param {(rect:Rect)=>void} callback
 */
export function useResizeObserver(ref, callback) {
  const refCallback = useRef();
  refCallback.current = callback;
  useEffect(() => {
    const { current } = ref;
    /**
     * @param {Rect} rect
     */
    const listener = (rect) => refCallback.current(rect);
    if (!current[listenersId]) {
      resizeObserver.observe(current);
      current[listenersId] = new Set();
    }
    current[listenersId].add(listener);
    return () => {
      current[listenersId].delete(listener);
      if (!current[listenersId].size) {
        delete current[listenersId];
        resizeObserver.unobserve(current);
      }
    };
  }, [ref]);
}

/**
 * Observes the ResizeObserver state of a reference and reflects
 * it to a local state of the component
 * @example
 * ```js
 * const ref = useResizeObserverState(ref);
 * if(ref){
 *  console.log(ref.width)
 * }
 * ```
 * @param {import("atomico").Ref} ref
 * @returns {Rect}
 */
export function useResizeObserverState(ref) {
  const [rect, setRect] = useState();
  useResizeObserver(ref, setRect);
  return rect;
}

/***
 * @typedef {Object} Rect
 * @property {number} width
 * @property {number} height
 * @property {number} x
 * @property {number} y
 * @property {number} top
 * @property {number} right
 * @property {number} bottom
 * @property {number} left
 */
