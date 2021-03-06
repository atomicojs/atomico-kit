/**
 * @param {string} url
 */
export function redirect(url: string): void;
/**
 *
 * @param {(ev: PopStateEvent) => void} handler
 */
export function listener(handler: (ev: PopStateEvent) => void): () => void;
export function getPath(): string;
