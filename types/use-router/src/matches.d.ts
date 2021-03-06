/// <reference types="@uppercod/exp-route" />
export function getMatch(path: string): import("@uppercod/exp-route").Match<import("@uppercod/exp-route").Params>;
export function matches(routes: Routes, currentPath: string): any[] | undefined;
export type RouterCallback = (params: import("@uppercod/exp-route").Params, search: import("@uppercod/exp-route").Params) => any;
export type Routes = {
    [x: string]: RouterCallback;
};
