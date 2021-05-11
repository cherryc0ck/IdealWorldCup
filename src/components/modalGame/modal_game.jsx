import React, { useEffect, useState } from 'react';
import styles from './modal_game.module.css';


const ModalGame = ({game}) => {
  const [items, setItems] = useState([...game.items]);
  const [displays, setDisplays] = useState([]);
  useEffect(()=>{
    items.sort(() => Math.random() - 0.5);
    setDisplays([items[0], items[1]]);
  },[]);

  return(
    <main className={styles.main}>
      <div className={styles.container}>
        {displays.map(display => {
          return (
            <div className={styles.pick} key={display.name}>
              <div className={styles.imgContainer}>
                <img className={styles.img} src={display.src} />
              </div>
              <p className={styles.name} src={display.name}>{display.name}</p>
            </div>
          )
        })}
        <img className={styles.vs} src="./images/vss.png" />
      </div>
    </main>
  )
};

export default ModalGame;