import styles from './login.module.css';

const Login = ({ authService }) => {

  const onLogin = event => {
    authService.login(event.currentTarget.textContent)
    .then(console.log);
  }

  return(
    <div className={styles.container}>
      <button className={styles.google} onClick={onLogin}>Google</button>
      <button className={styles.github} onClick={onLogin}>Github</button>
    </div>
  );
}

export default Login;