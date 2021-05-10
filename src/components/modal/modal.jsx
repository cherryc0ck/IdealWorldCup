import React from 'react';
import styles from './modal.module.css';


const Modal = ({game, open, close, title}) => {
  
  return (
    <div className={open ? `${styles.openModal}`:`${styles.modal}`}>
      {open ?(
        <section className={styles.container}>
          <header className={styles.header}>
            {title}
            <button className={styles.headerBtn} onClick={close}>&times;</button>
          </header>
          <main className={styles.main}>
            <img src={game.img} />
            <img src={game.img} />
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