/**
 * Returns a string status according to the serialized cacheQuery
 * @example
 * ```js
 * const state = useResponsiveState("default resolution, hd resolution 1080px,  fullhd resolution 1980px")
 * ```
 * @param {string} sizes
 * @returns {string}
 */
export function useResponsiveState(sizes: string): string;
/**
 *
 * @param {string} sizes
 * @returns {[string,Match[]]}
 */
export function getSizes(sizes: string): [string, Match[]];
export const matchSize: RegExp;
export function getQuery({ width, height, type }: Match): MediaQueryList;
export type Match = {
    value: string;
    width: number;
    height: number;
    type: string;
};
