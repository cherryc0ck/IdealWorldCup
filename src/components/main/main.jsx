import React from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import styles from './main.module.css';

const Main = ({authService}) => {

  const onLogout = () =>{
    authService.logout();
  };

  return (
    <section className={styles.container}>
      <Header authService={authService} onLogout={onLogout} />
      <main className={styles.main}>
        <ul>
          <li>
            이상형 월드컵
          </li>
        </ul>
      </main>
    </section>
  )   
};

export default Main;