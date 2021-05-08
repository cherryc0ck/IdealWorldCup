import React, { useEffect } from 'react';
import Login from '../login/login';
import styles from './header.module.css';

const Header = ({ authService, onLogout }) => {

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
      <Login authService={authService} onLogout={onLogout} />
    </div>
  </header>
  )
};

export default Header;