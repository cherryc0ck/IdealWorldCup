import React  from 'react';
import Login from '../login/login';
import styles from './header.module.css';

const Header = ({ authService, onLogout, loginKind, cardRepository }) => {

  return (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.title}>
        best
        <br/>
        ideal
        <br/>
        world-cup
      </h1>
      <Login 
        authService={authService}
        onLogout={onLogout}
        loginKind={loginKind}
        cardRepository={cardRepository}
      />
      <div className={styles.imgContainer}>
        <img className={styles.cupOne} src="./images/ico/cup.png" alt="cup" />
        <img className={styles.cupTwo} src="./images/ico/cup.png" alt="cup" />
      </div>
    </div>
  </header>
  )
};

export default Header;