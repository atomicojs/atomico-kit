/**
 * Allows the useEffect callback to have asynchronous execution by default
 * @param {()=>Promise<()=>any|void>} effect
 * @param {Array<any>} [args]
 * @example
 * ```js
 * useAsyncEffect(async ()=>{});
 * ```
 */
export function useAsyncEffect(effect: () => Promise<() => any | void>, args?: any[] | undefined): void;
