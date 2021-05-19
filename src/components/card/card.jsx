import React from 'react';
import styles from './card.module.css';

const Card = ({userName, loginKind, card}) => {
  
  const {theme, message, fileName, fileURL} = card;
  const DEFAULT_IMAGE = '/images/ico/nullProfile.png';
  const url = fileURL || DEFAULT_IMAGE;
  const onChange = () => {
    return;
  }
  return(
    <div className={`${styles.card} ${getStyles(theme)}`}>
      <img 
        src={url}
        className={styles.avatar} 
        alt="profilePhoto" 
      />
      <div className={styles.info}>
        <p className={styles.hello}>
          {userName ? userName : "비회원"}
        </p>
        <p className={styles.auth}>({loginKind})</p>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  )
};

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
    default:
      throw new Error('theme error');
  }
}

export default Card;