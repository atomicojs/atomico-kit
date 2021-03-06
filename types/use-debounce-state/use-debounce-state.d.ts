/**
 * Generates a bottleneck in the definition of the state
 * @template T
 * @param {number} delay
 * @param {T} [initialState]
 * @return {[T extends (...args:any[])=>infer R ? R : T, (current: T extends (...args:any[])=>infer R ? R : T)=>void]}
 */
export function useDebounceState<T>(delay: number, initialState?: T | undefined): [T extends (...args: any[]) => infer R ? R : T, (current: T extends (...args: any[]) => infer R_1 ? R_1 : T) => void];
