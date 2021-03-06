import React from 'react';
import GameList from '../gameList/game_list';
import Header from '../header/header';
import styles from './main.module.css';

const Main = ({authService, cardRepository}) => {

  const onLogout = () =>{
    authService.logout();
  };

  return (
    <section className={styles.section}>
      <Header authService={authService} onLogout={onLogout} cardRepository={cardRepository} />
      <main className={styles.main}>
        <GameList />
      </main>
    </section>
  )   
};

export default Main;