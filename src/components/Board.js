import { useEffect, useRef, useState } from 'react';

import {
  checkAllDone,
  generateTileset,
  randomizeTiles
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
    debug = false,
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
    maxWidth: `50%`
  };
  /** @type {ReactRef<types.TileData[]>} */
  const tilesetRef = useRef(randomizeTiles(generateTileset(levelData)));
  /** @type {ReactState<number>} */
  const [selectedTile, setSelectedTile] = useState(undefined);
  /** @type {ReactState<number>} */
  const [turnCount, setTurnCount] = useState(0);
  /** @type {ReactState<boolean>} */
  const [allDone, setAllDone] = useState(false);

  /** @type {function(number):void} */
  function doClick(tileIndex) {
    if (tilesetRef.current[tileIndex].fixed || allDone) {
      return;
    }

    if (soundEnabled) {
      new Audio(`audio/tap.mp3`).play();
    }

    if (selectedTile) {
      if (selectedTile !== tileIndex) {
        const tmp = tilesetRef.current[tileIndex];

        tilesetRef.current[tileIndex] = tilesetRef.current[selectedTile];
        tilesetRef.current[selectedTile] = tmp;

        setTurnCount(turnCount + 1);
      }

      setSelectedTile(null);
    }
    else {
      setSelectedTile(tileIndex);
    }
  }

  useEffect(function checkForVictory() {
    if (turnCount === 0 || selectedTile) {
      return;
    }

    const done = checkAllDone(levelData, tilesetRef.current);

    setAllDone(done);
  }, [ selectedTile, levelData, turnCount ]);

  useEffect(function checkForAllDone() {
    if (!allDone) {
      return;
    }

    onComplete(turnCount);
  }, [ allDone, onComplete, turnCount ]);

  return (
    <div style={boardStyle}>
      {tilesetRef.current.map(
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
