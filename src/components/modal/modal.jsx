import React from 'react';
import styles from './modal.module.css';


const Modal = (props) => {
  const {open, close, title} = props;    
  
  return (
    <div className={open ? `${styles.openModal}`:`${styles.modal}`}>
      {open ?(
        <section className={styles.container}>
          <header className={styles.header}>
            {title}
            <button className={styles.headerBtn} onClick={close}>close</button>
          </header>
          <main className={styles.main}>
            하하하하하
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