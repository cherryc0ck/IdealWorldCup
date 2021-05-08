import { useEffect } from 'react';
import { useHistory } from 'react-router';
import styles from './login.module.css';

const Login = ({ authService, onLogout}) => {

  const history = useHistory();
  
  const onLogin = event => {
    authService //
    .login(event.currentTarget.textContent)
    .then(data => goToMain(data.user.uid) );
  }
  // const onLogout = () =>{
  //   authService.logout();
  // };

  useEffect(()=>{
    authService.onAuthChange(user => {
      if(!user){
        history.push('/');
      }
      user && goToMain(user.uid);
    });
  });
  const goToMain = userId =>{
    history.push({
      pathname : '/main',
      state : {id : userId},
    });
  };

  return(
    <div className={styles.container}>
      {
        onLogout && 
        <>
          <button className={styles.logout} onClick={onLogout}>Logout</button>
          <button className={styles.mypage} >MyPage</button>
        </>
      }
      {
        onLogout ||
        <>
          <button className={styles.google} onClick={onLogin}>Google</button>
          <button className={styles.github} onClick={onLogin}>Github</button>
        </>
      }

    </div>
  );
}

export default Login;