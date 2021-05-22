import React, { useEffect, useState } from 'react';
import styles from './modal_game.module.css';


const ModalGame = ({ game }) => {
  const [items, setItems] = useState([...game.items]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);

  
  useEffect(()=>{
    items.sort(() => Math.random() - 0.5);
    setDisplays([items[0], items[1]]);
  }, [items]);

  const clickHandler = (picker) => () => {
    if(items.length <= 2){
      if(winners.length === 0){
        setDisplays([picker]);
      }else {
        let updatedItems = [...winners, picker];
        setItems(updatedItems);
        setDisplays([updatedItems[0], updatedItems[1]]);
        setWinners([]);
      }
    }else if(items.length > 2){
      setWinners([...winners, picker]);
      setDisplays([items[2], items[3]]);
      setItems(items.slice(2));
    }
  };

  return(
    <main className={styles.main}>
      <div className={styles.container}>
        {displays.map(display => {
          return (
            <div 
              className={styles.pick} 
              key={display.name}
              onClick={clickHandler(display)}
            >
              <div className={styles.imgContainer}>
                <img className={styles.img} src={display.src} data-name={display.name} alt="worldCup img"/>
              </div>
              <p className={styles.name} src={display.name}>{display.name}</p>
            </div>
          )
        })}
      </div>
    </main>
  )
};

export default ModalGame;