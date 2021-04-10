import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = ({ authService, onLogout }) => {
  const [isLogined, setIsLogined] = useState(false);

  const history = useHistory();

  const logined = (userId) => {
    history.push({ state:{id: userId} });
  };

  const onLogin = (event) =>{
    authService //
    .login(event.currentTarget.textContent)
    .then(data => logined(data.user.uid))
  };



  useEffect(()=>{
    authService //
    .onAuthChange(user => {
      if(user){
        setIsLogined(true);
        console.log(history.location.state);
      }else{
        setIsLogined(false);
        console.log(history.location.state);
      }
    })
  });

  return(
    <div className={styles.container}>
      {isLogined &&( 
        <>
          <button className={styles.mypage}>My Page</button>
          <button className={styles.logout} onClick={onLogout}>Logout</button>
        </>
      )}
      {isLogined ||( 
        <>
          <button className={styles.google} onClick={onLogin}>Google</button>
          <button className={styles.github} onClick={onLogin}>Github</button>
        </>
      )}
    </div>
  )
};

export default Login;