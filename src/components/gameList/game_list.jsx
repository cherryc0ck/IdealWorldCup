import React from 'react';
import GameItem from '../gameItem/game_item';
import styles from './game_list.module.css';

const GameList = (props) => (
    <ul classList={styles.container}>
      <GameItem/>
    </ul>
  );


export default GameList;