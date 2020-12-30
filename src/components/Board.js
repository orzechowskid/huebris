import { useEffect, useState } from 'react';

import {
  checkAllDone,
  generateTileset
} from '../utils';
import Tile from './Tile';

import * as types from '../types';

/**
 * @typedef {Object} BoardProps
 * @property {types.LevelData} levelData
 * @property {() => void} onComplete
 * @property {boolean} soundEnabled
 */

/** @type {types.Component<BoardProps>} */
function Board(props) {
  const {
    debug,
    levelData,
    onComplete,
    soundEnabled
  } = props;
  const boardStyle = {
    display: `grid`,
    flexGrow: 1,
    fontWeight: 800,
    gridTemplateColumns: `repeat(${levelData.size.columns}, 1fr)`,
    margin: `80px`,
    maxWidth: `50%`,
    userSelect: `none`
  };
  /** @type {types.ReactState<boolean>} */
  const [shuffle, setShuffle] = useState(!debug);
  /** @type {types.ReactState<types.TileData[]>} */
  const [tileset, setTileset] = useState(generateTileset(levelData, shuffle));
  /** @type {types.ReactState<number>} */
  const [selectedTile, setSelectedTile] = useState(undefined);
  /** @type {types.ReactState<number>} */
  const [turnCount, setTurnCount] = useState(0);
  /** @type {types.ReactState<boolean>} */
  const [allDone, setAllDone] = useState(false);

  /** @type {function(number):void} */
  function doClick(tileIndex) {
    if (tileset[tileIndex].fixed || allDone) {
      return;
    }

    if (soundEnabled) {
      try {
        new Audio(`audio/tap.mp3`).play();
      } catch (ex) {
        console.error(ex);
      }
    }

    if (selectedTile) {
      if (selectedTile !== tileIndex) {
        const tmp = tileset[tileIndex];

        tileset[tileIndex] = tileset[selectedTile];
        tileset[selectedTile] = tmp;

        setTurnCount(turnCount + 1);
      }

      setSelectedTile(null);
    }
    else {
      setSelectedTile(tileIndex);
    }
  }

  useEffect(function checkForVictory() {
    if (turnCount <= 0 || selectedTile) {
      return;
    }

    const done = checkAllDone(levelData, tileset);

    setAllDone(done);
  }, [ selectedTile, levelData, tileset, turnCount ]);

  useEffect(function checkForAllDone() {
    if (!allDone) {
      return;
    }

    onComplete(turnCount);
  }, [ allDone, onComplete, turnCount ]);

  useEffect(function() {
    setShuffle(!debug);
  }, [ debug ]);

  useEffect(function() {
    setTileset(generateTileset(levelData, shuffle));
    setTurnCount(0);
  }, [ levelData, shuffle ]);

  return (
    <div style={boardStyle}>
      {tileset.map(
        (tile, idx) => (
          <Tile
            key={`${tile.position.row}.${tile.position.col}`}
            debug={debug}
            onClick={() => doClick(idx)}
            selected={idx === selectedTile}
            tile={tile}
          />
        ))}
    </div>
  );
}

export default Board;
