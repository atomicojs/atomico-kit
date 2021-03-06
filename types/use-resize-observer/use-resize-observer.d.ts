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
export function useResizeObserver(ref: import("atomico").Ref, callback: (rect: Rect) => void): void;
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
export function useResizeObserverState(ref: import("atomico").Ref): Rect;
/**
 * *
 */
export type Rect = {
    width: number;
    height: number;
    x: number;
    y: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
};
