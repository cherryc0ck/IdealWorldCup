import React from 'react';
import Card from '../card/card';
import Header from '../header/header';
import styles from './myPage.module.css';

const MyPage = ({authService}) => {

  const onLogout = () =>{
    authService.logout();
  };

  return (
    <section className={styles.section}>
      <Header authService={authService} onLogout={onLogout} />
      <main className={styles.main}>
        <div className={styles.container}>
          <Card />
          <div className={styles.details}>
            디테일입니다.
          </div>
        </div>
      </main>
    </section>
  )
};

export default MyPage;