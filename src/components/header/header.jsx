import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Login from '../login/login';
import styles from './header.module.css';

const Header = ({ authService }) => {
  const history = useHistory();

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
      <Login authService={authService}  />
      <p>
      이상형 월드컵을 직접 진행 해보고 만들수도 있어요!
      당신의 이상형은 누구인가요? 당신이 제일 좋아하는 과일은 무엇이죠?
      </p>
    </div>
  </header>
  )
};

export default Header;