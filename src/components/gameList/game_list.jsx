import React from 'react';
import GameItem from '../gameItem/game_item';
import worldCupData from '../../data/worldCup.json';
import styles from './game_list.module.css';

const GameList = (props) => {

  return(
    <ul className={styles.container}>
      {worldCupData.category.map(game=>(
        <GameItem 
          key={game.index}
          game={game}
        />
      ))}

    </ul>
    )
};


export default GameList;