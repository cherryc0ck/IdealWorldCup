import React, { useEffect, useState } from 'react';
import styles from './modal.module.css';


const Modal = ({game, open, close, title}) => {
  
  const [items, setItems] = useState([]);
  const [displays, setDisplays] = useState([]);
  useEffect(()=>{
    game.items.sort(() => Math.random() - 0.5);
    setItems(game.items);
    setDisplays([items[0], items[1]]);
  }, []);

  return (
    <div className={open ? `${styles.openModal}`:`${styles.modal}`}>
      {open ?(
        <section className={styles.container}>
          <header className={styles.header}>
            {title}
            <button className={styles.headerBtn} onClick={close}>&times;</button>
          </header>
          <main className={styles.main}>
            <div className={styles.container}>
              {displays.map(display=>{
                return (
                  <div key={display.name}>
                    <img className={styles.img} src={display.src} />
                    <p className={styles.name}>{display.name}</p>
                  </div>
                )
              })}
            </div>
          </main>
          <footer className={styles.footer}>
            <button className={styles.footerBtn} onClick={close}>close</button>
          </footer>
        </section>
      ): null}
    </div>
  );
};

export default Modal;