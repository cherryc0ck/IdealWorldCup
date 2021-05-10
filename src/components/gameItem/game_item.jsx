import React from 'react';
import styles from './game_item.module.css';

const GameItem = ({game}) => {

  return(
      <li className={styles.game}>
        <a className={styles.container}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={game.img} />
          </div>
          <p className={styles.title}>{game.title}</p>
          <button className={styles.button}>START</button>
        </a>
      </li>
  )
};

export default GameItem;