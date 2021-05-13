import React from 'react';
import styles from './progressbar.module.css';

const Progressbar = ({onProgress}) => {

  const arr = [1,2,3,4,5,6,7,8];

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