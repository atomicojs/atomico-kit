/**
 * Generate a second render, this render escapes the current
 * one and is useful for collaborative work between LightDOM and shadowDOM
 * @param {()=>any} callback
 * @param {any[]} [args]
 */
export function useRender(callback: () => any, args?: any[] | undefined): void;
