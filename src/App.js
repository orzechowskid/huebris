import { useCallback, useEffect, useState } from 'react';

import levels from './levels';
import Board from './components/Board';
import Wizard from './components/Wizard';
import {
  ReactComponent as GithubIcon
} from './icons/github.svg';
import {
  ReactComponent as Muted
} from './icons/volume-mute.svg';
import {
  ReactComponent as Volume
} from './icons/volume-up.svg';

import './App.css';

import * as types from './types';

function Sound(props) {
  const {
    soundEnabled,
    ...otherProps
  } = props;
  const _props = {
    ...otherProps,
    className: `icon`
  };

  return soundEnabled
    ? (<Volume {..._props} />)
    : (<Muted {..._props} />);
}

function App() {
  /** @type {types.ReactState<boolean>} */
  const [debug, setDebug] = useState(window.location.search.length > 0);
  /** @type {number} */
  const initialLevel = debug ?
    +(window.location.search.slice(1)) : 0;
  /** @type {types.ReactState<number>} */
  const [currentLevel, setCurrentLevel] = useState(initialLevel);
  /** @type {types.ReactState<boolean>} */
  const [visible, setVisible] = useState(false);
  /** @type {types.ReactState<boolean>} */
  const [soundEnabled, setSoundEnabled] = useState(true);

  const onLevelComplete = useCallback(function onLevelComplete(numMoves) {
    console.info(numMoves);

    if (soundEnabled) {
      setTimeout(() => new Audio(`audio/complete.mp3`).play(), 500);
    }

    setTimeout(function next() {
      setVisible(false);
      setTimeout(function updateCurrentLevel() {
        setCurrentLevel((currentLevel + 1) % levels.length);
      }, 2000);
    }, 2000);
  }, [ currentLevel, soundEnabled ]);

  function onToggleSound() {
    setSoundEnabled(!soundEnabled);
  }

  useEffect(function onLevelChange() {
    setVisible(true);
  }, [ currentLevel ]);

  return (
    <>
      <Wizard />

      <div className="container">
        <div className="info-container">
          <span>
            <Sound soundEnabled={soundEnabled} onClick={onToggleSound} />
          </span>

          {window.location.search.length > 0 && (<button onClick={() => setDebug(!debug)}>toggle</button>)}

          <span>
            level: {1 + currentLevel}
          </span>
        </div>

        <div className={`App ${visible ? 'visible' : ''}`}>
          <Board
            key={currentLevel}
            debug={debug}
            levelData={levels[currentLevel]}
            onComplete={onLevelComplete}
            soundEnabled={soundEnabled}
          />
        </div>

        <div className="info-container">
          <a href="https://github.com/orzechowskid/huebris">
            <GithubIcon className="icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
