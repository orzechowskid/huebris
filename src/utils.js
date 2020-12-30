import * as types from './types';

/**
 * @param {types.LevelData} levelData
 * @param {number} row
 * @param {number} col
 * @return {boolean}
 */
function isFixedTile(levelData, row, col) {
  switch (levelData.fixedPoints) {
    case `corners`: {
      return (row === 0 || row === levelData.size.rows - 1)
        && (col === 0 || col === levelData.size.columns - 1);
    }
    case `east-west`: {
      return col === 0 || col === levelData.size.columns - 1;
    }
    case `north-south`: {
      return row === 0 || row === levelData.size.rows - 1;
    }
    default: {
      return false;
    }
  }
}

/**
 * @param {types.TileData[]} tileset
 * @return {types.TileData[]}
 */
function randomizeTiles(tileset) {
  /**
   * @description Fisher-Yates shuffle but keep fixed tiles in place
   * @param {types.TileData[]} array
   * @return {types.TileData[]}
   */
  function shuffle(array) {
    let currentIndex = array.length;
    let temp = undefined;
    let idx = undefined;

    while (currentIndex > 1) {
      do {
        idx = Math.floor(Math.random() * currentIndex);
      } while (array[idx].fixed);

      currentIndex--;

      if (array[currentIndex].fixed) {
        continue;
      }

      temp = array[currentIndex];
      array[currentIndex] = array[idx];
      array[idx] = temp;
    }

    return array;
  }

//  return tileset;
//  return shuffle([ ...tileset ]);

  return window.location.search.length ? tileset : shuffle([ ...tileset ]);
}

/**
 * @param {types.LevelData} levelData
 * @param {number} row
 * @param {number} col
 * @return {string}
 */
function generateBackground(levelData, row, col) {
/*  const {
    east,
    north,
    south,
    west,
  } = levelData.colors;
  const {
    columns,
    rows
  } = levelData.size;
  const [
    westEastStart,
    westEastEnd
  ] = west.reduce(
    function getGradientStop([start, end], channel, idx) {
      const step = (east[idx] - west[idx]) / columns;

      return [
        [ ...start, west[idx] + (step * col) ],
        [ ...end, west[idx] + (step * (col + 1)) ]
      ];
    },
    [[], []]
  );
  const [
    northSouthStart,
    northSouthEnd
  ] = north.reduce(
    function getGradientStop([start, end], channel, idx) {
      const step = (south[idx] - north[idx]) / rows;

      return [
        [ ...start, north[idx] + (step * row) ],
        [ ...end, north[idx] + (step * (row + 1)) ]
      ];
    },
    [[], []]
  );

  return `linear-gradient(90deg, rgba(${westEastStart}, 0.5), rgba(${westEastEnd}, 0.5)), linear-gradient(180deg, rgba(${northSouthStart}, 0.5), rgba(${northSouthEnd}, 0.5)) `;
*/

  //const angle = 90 + (Math.atan2(rows, columns) * 180 / Math.PI);

  const {
    from,
    to
  } = levelData.colors;
  const {
    columns,
    rows
  } = levelData.size;
  const hStep = (to[0] - from[0]) / columns;
  const lStep = (to[2] - from[2]) / rows;
  const color = [
    from[0] + (hStep * col),
    (from[1] + to[1]) / 2,
    from[2] + (lStep * row)
  ];

  return `hsl(${color[0]}deg, ${color[1]}%, ${color[2]}%)`;
}

/**
 * @param {types.LevelData} levelData
 * @return {types.TileData[]}
 */
function generateTileset(levelData) {
  return Array(levelData.size.rows).fill(null).reduce(
    (all, _ignored, rowIdx) => [
      ...all,
      ...(Array(levelData.size.columns).fill(null).map(
        function generateTile(_ignored, colIdx) {
          const isFixed = isFixedTile(levelData, rowIdx, colIdx);

          return {
            fixed: isFixed,
            position: {
              col: colIdx,
              row: rowIdx
            },
            styles: {
              alignItems: `center`,
              background: generateBackground(levelData, rowIdx, colIdx),
//              backgroundBlendMode: `difference`,
              cursor: isFixed ? `default` : `pointer`,
              display: `inline-flex`,
              height: `100%`,
              justifyContent: `center`,
              width: `100%`
            }
          };
        }
      ))
    ],
    []
  );
}

/**
 * @param {types.LevelData} levelData
 * @param {types.TileData[]} tileData
 * @return {boolean}
 */
function checkAllDone(levelData, tileData) {
  return tileData.every(function inRightPlace(tile, idx) {
    const row = Math.floor(idx / levelData.size.columns);
    const col = idx % levelData.size.columns;

    return row === tile.position.row && col === tile.position.col;
  });
}

export {
  checkAllDone,
  generateBackground,
  generateTileset,
  isFixedTile,
  randomizeTiles
};
