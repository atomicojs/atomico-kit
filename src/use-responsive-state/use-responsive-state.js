import { useEffect, useState } from "atomico";

export const matchSize = /,\s*([^,]+)\s+(?:(\d+)(?:x(\d+)){0,1}(px|em|rem))/;

/**
 * @type {Object<string,[string,Match[]]>}
 */
const cacheSize = {};
/**
 * @type { Object<string,MediaQueryList> }
 */
const cacheQuery = {};
/**
 * Returns a string status according to the serialized cacheQuery
 * @example
 * ```js
 * const state = useResponsiveState("default resolution, hd resolution 1080px,  fullhd resolution 1980px")
 * ```
 * @param {string} sizes
 * @returns {string}
 */
export function useResponsiveState(sizes) {
  const [sizeDefault, matches] = getSizes(sizes);

  const [state, setState] = useState(getState);

  function getState() {
    const match = matches.find((match) => getQuery(match).matches);
    return match ? match.value : sizeDefault;
  }

  useEffect(() => {
    const listener = () => setState(getState);
    // Regenerates the initial state
    listener();
    // Observe the resolution changes
    matches.forEach((match) => getQuery(match).addListener(listener));
    return () =>
      matches.forEach((match) => getQuery(match).removeListener(listener));
  }, [sizes]);

  return state;
}
/**
 *
 * @param {Match} match
 * @returns {MediaQueryList}
 */
export const getQuery = ({ width, height, type }) => {
  const query =
    (width ? `(min-width: ${width}${type})` : "") +
    (height ? `and (min-height: ${height}${type})` : "");
  return (cacheQuery[query] = cacheQuery[query] || window.matchMedia(query));
};
/**
 *
 * @param {string} sizes
 * @returns {[string,Match[]]}
 */
export function getSizes(sizes) {
  if (cacheSize[sizes]) return cacheSize[sizes];
  const values = [];
  let test;
  while ((test = sizes.match(matchSize))) {
    const [replace, value, width, height, type] = test;

    sizes = sizes.replace(replace, "");

    values.push({
      value,
      width: Number(width),
      height: Number(height || ""),
      type,
    });
  }
  return [
    sizes.replace(/\s*,(.*)/, "").trim(),
    values
      .sort((a, b) => (a.height > b.height ? -1 : 1))
      .sort((a, b) => (a.width > b.width ? -1 : a.width == b.height ? 0 : 1)),
  ];
}

/**
 * @typedef {Object} Match
 * @property {string} value
 * @property {number} width
 * @property {number} height
 * @property {string} type
 */
