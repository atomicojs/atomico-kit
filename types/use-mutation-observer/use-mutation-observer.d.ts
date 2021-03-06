/**
 * create an instance of MutationObserver for the given reference
 * @example
 * ```js
 * const ref = useRef();
 * const config = {childList: true};
 * useMutationObserver(ref, (mutationRecords)=>{}, config);
 * ```
 * @param {import("atomico").Ref} ref
 * @param {MutationCallback} observe
 * @param {MutationObserverInit} [config]
 */
export function useMutationObserver(ref: import("atomico").Ref, observe: MutationCallback, config?: MutationObserverInit | undefined): void;
/**
 * create an instance of MutationObserver for the given reference
 * and bind MutationRecord[] to a local state
 * @example
 * ```js
 * const ref = useRef();
 * const config = {childList: true};
 * const mutationRecords = useMutationObserverState(ref, config);
 * ```
 * @param {import("atomico").Ref} ref
 * @param {MutationObserverInit} [config]
 * @returns {MutationRecord[]}
 */
export function useMutationObserverState(ref: import("atomico").Ref, config?: MutationObserverInit | undefined): MutationRecord[];
