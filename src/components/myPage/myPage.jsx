import React from 'react';
import Header from '../header/header';
import styles from './myPage.module.css';

const MyPage = ({authService}) => {

  const onLogout = () =>{
    authService.logout();
  };

  return (
    <section className={styles.container}>
      <Header authService={authService} onLogout={onLogout} />
      <main className={styles.main}>
        <h1>MyPage</h1>
      </main>
    </section>
  )
};

export default MyPage;