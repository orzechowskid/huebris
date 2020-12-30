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
    let swapAttempts = 0;

    while (currentIndex > 1) {
      swapAttempts = 0;

      do {
        idx = Math.floor(Math.random() * currentIndex);
        swapAttempts++;
      } while (array[idx].fixed && swapAttempts < 50);

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

  return shuffle([ ...tileset ]);
}

/**
 * @param {types.LevelData} levelData
 * @param {number} row
 * @param {number} col
 * @return {string}
 */
function generateBackground(levelData, row, col) {
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
 * @param {boolean} shuffle
 * @return {types.TileData[]}
 */
function generateTileset(levelData, shuffle) {
  const tileset = Array(levelData.size.rows).fill(null).reduce(
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

  return shuffle ? randomizeTiles(tileset) : tileset;
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
