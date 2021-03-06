import React, { memo } from 'react';
import styles from './card.module.css';

const Card = memo(({userName, loginKind, card}) => {
  
  const {theme, message, fileURL} = card;
  const DEFAULT_IMAGE = '/images/ico/nullProfile.png';
  const url = fileURL || DEFAULT_IMAGE;
  return(
    <div className={`${styles.card}  ${getStyles(theme)}`}>
      <div className={styles.profile}>
        <img 
          src={url}
          className={styles.profileImg} 
          alt="profilePhoto" 
        />
      </div>
      <div className={styles.info}>
        <p className={styles.hello}>
          {userName ? userName : "λΉνμ"}
        </p>
        <p className={styles.auth}>({loginKind})</p>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  )
});

function getStyles(theme){
  switch(theme){
    case 'white' :
      return styles.white;
    case 'dark' :
      return styles.dark;
    case 'pink' :
      return styles.pink;
    case 'colorful' :
      return styles.colorful;
    case undefined :
      return styles.white;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;