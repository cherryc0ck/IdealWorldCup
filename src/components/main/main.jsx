import React from 'react';
import { useHistory } from 'react-router';
import GameList from '../gameList/game_list';
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
        <GameList />
      </main>
    </section>
  )   
};

export default Main;