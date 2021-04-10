import React from 'react';
import styles from './login.module.css';

const Login = (props) => (
  <div className={styles.container}>
    <button className={styles.google}>Google</button>
    <button className={styles.github}>Github</button>
  </div>
);

export default Login;