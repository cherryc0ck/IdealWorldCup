import React   from 'react';
import styles from './modal.module.css';
import ModalGame from '../modalGame/modal_game';

const Modal = ({game, open, close, title}) => {
  return (
    <div className={open ? `${styles.openModal}`:`${styles.modal}`}>
      {open ?(
        <section className={styles.container}>
          <header className={styles.header}>
            {title}
            <button className={styles.headerBtn} onClick={close}>&times;</button>
          </header>
          <ModalGame game={game} />
          <footer className={styles.footer}>
          </footer>
        </section>
      ): null}
    </div>
  );
};

export default Modal;