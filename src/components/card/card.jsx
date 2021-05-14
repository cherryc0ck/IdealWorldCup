import React from 'react';
import styles from './card.module.css';

const Card = (props) => {
  return(
    <div className={styles.card}>
      <img 
        src="./images/ico/nullProfile.png" 
        className={styles.avatar} 
        alt="profile photo" 
      />
      <div className={styles.info}>
        <p className={styles.hello}>ㅇㅇㅇ님 안녕하세요.</p>
        <p className={styles.auth}>(구글 로그인)</p>
      </div>
    </div>
  )
};

export default Card;