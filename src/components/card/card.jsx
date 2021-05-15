import React from 'react';
import styles from './card.module.css';

const Card = ({userName, loginKind}) => {

  const onChange = () => {
    return;
  }

  return(
    <div className={styles.card}>
      <img 
        src="./images/ico/nullProfile.png" 
        className={styles.avatar} 
        alt="profilePhoto" 
      />
      <div className={styles.info}>
        <p className={styles.hello}>
          {userName ? userName : "비회원"}님 안녕하세요.
        </p>
        <p className={styles.auth}>({loginKind})</p>
        <textarea name="textarea" value="dd" onChange={onChange}>
          ddddd
        </textarea>
      </div>
    </div>
  )
};

export default Card;