import * as React from 'react';

import * as types from '../types';

/**
 * @typedef {Object} TileProps
 * @property {function(void):void} onClick
 * @property {boolean} selected
 * @property {types.TileData} tile
 */

/** @type {types.Component<TileProps>} */
function Tile(props) {
  const {
    debug = false,
    onClick,
    selected,
    tile
  } = props;
  const containerStyle = {
    background: `white`,
    boxShadow: selected ? `2px 2px 6px #808080` : undefined,
    transform: selected ? `scale(1.125)` : undefined,
    transition: `transform 0.1s linear`,
  };

  return (
    <div
      onClick={onClick}
      style={containerStyle}
    >
      <div
        style={tile.styles}
      >
        {tile.fixed ? `×` : debug ? `${tile.position.row}.${tile.position.col}` : ``}
      </div>
    </div>
  );
}

export default Tile;
