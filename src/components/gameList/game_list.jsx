import React  from 'react';
import GameItem from '../gameItem/game_item';
import jsonData from '../../data/worldCup.json';
import {cloneDeep} from 'lodash';
import styles from './game_list.module.css';

const worldCupData = cloneDeep(jsonData);

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