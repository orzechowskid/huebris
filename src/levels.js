import * as types from './types';

/** @type {types.LevelData[]} */
const levelData = [{
  colors: {
    from: [ 0, 100, 75 ],
    to: [ 19, 100, 25 ],
  },
  fixedPoints: `east-west`,
  size: {
    rows: 3,
    columns: 3
  }
}, {
  colors: {
    from: [ 0, 100, 75 ],
    to: [ 37, 100, 25 ],
  },
  fixedPoints: `corners`,
  size: {
    rows: 4,
    columns: 4
  }
}, {
  colors: {
    from: [ 75, 100, 25 ],
    to: [ 37, 100, 75 ]
  },
  fixedPoints: `corners`,
  size: {
    rows: 4,
    columns: 4
  }
}, {
  colors: {
    from: [ 37, 100, 75 ],
    to: [ 75, 100, 25 ]
  },
  fixedPoints: `north-south`,
  size: {
    rows: 5,
    columns: 5
  }
}];

export default levelData;
