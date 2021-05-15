import React from 'react';
import styles from './progressbar.module.css';

const Progressbar = ({onProgress}) => {

  return(
      <div className={styles.container}>
        <div className={styles.box}>16강</div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}>8강</div>
      </div>
  )
};

export default Progressbar;