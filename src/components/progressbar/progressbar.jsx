import React from 'react';
import styles from './progressbar.module.css';

const Progressbar = (props) => (
      <div className={styles.container}>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
      </div>
  );

export default Progressbar;