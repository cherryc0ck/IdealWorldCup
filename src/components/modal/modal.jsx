import React  from 'react';
import styles from './modal.module.css';
import ModalGame from '../modalGame/modal_game';
import Progressbar from '../progressbar/progressbar';

const Modal = ({game, open, close, title}) => {

  const onProgress = (dd) => {
    console.log(dd);
  };

  return (
    <div className={open ? `${styles.openModal}`:`${styles.modal}`}>
      {open ?(
        <section className={styles.container}>
          <header className={styles.header}>
            {title}
            <button className={styles.headerBtn} onClick={close}>&times;</button>
          </header>
          <ModalGame game={game} onProgress={onProgress} />
          <footer className={styles.footer}>
            <Progressbar onProgress={onProgress} />
          </footer>
        </section>
      ): null}
    </div>
  );
};

export default Modal;