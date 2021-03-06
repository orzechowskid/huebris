/**
 * @typedef {(props:P) => any} Component
 * @template P
 */

/**
 * @typedef {{current: T}} ReactRef
 * @template T
 */

/**
 * @typedef {[T, (newValue:T) => void]} ReactState
 * @template T
 */

/**
 * @typedef {Object} TileData
 * @property {boolean} fixed
 * @property {{col:number, row:number}} position
 * @property {Object.<string,any>} styles
 */

/** @typedef {'corners'|'east-west'|'edges'|'north-south'} FixedPoints */

/**
 * @typedef {Object} LevelData
 * @property {Object.<string,number[]>} colors
 * @property {number[]} colors.from
 * @property {number[]} colors.to
 * @property {FixedPoints} fixedPoints
 * @property {{ columns: number, rows: number }} size
 */

export {}; // trick the langserver into importing JSDoc types
