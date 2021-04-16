import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = ({ authService }) => {

  const history = useHistory();

  const logined = (userId) => {
    history.push({ state:{id: userId} });
    maing();
  };

  const logouted = () => {
    history.push({
      pathname: '/',
      state: {id: undefined} 
    });
    maing();
  };

  const onLogin = (event) =>{
    authService //
    .login(event.currentTarget.textContent)
    .then(data => logined(data.user.uid))
  };

  const onLogout = () =>{
    authService.logout();
    logouted();
  };

  const onMypage = () =>{
    history.push({
      pathname:'/mypage',
    });
  }

  useEffect(()=>{
    authService //
    .onAuthChange(user => {
      user && logined(user.uid);
    })
  });

  const [isLogin, setIsLogin] = useState();

  const maing = ()=>{
    if(history.location.state.id){
       setIsLogin(history.location.state.id);
       console.log(isLogin);
       console.log(history.location.state.id);
    }
    else{
      setIsLogin(undefined);
      console.log(isLogin);
      console.log(history.location.state.id);
    }
  };

  return(
    <div className={styles.container}>
      {isLogin === undefined || history.location.state.id === undefined   ?
        <>
          <button className={styles.google} onClick={onLogin}>Google</button>
          <button className={styles.github} onClick={onLogin}>Github</button>
        </>
        :
        <>
          <button className={styles.mypage} onClick={onMypage}>My Page</button>
          <button className={styles.logout} onClick={onLogout}>Logout</button>
        </>
      }
    </div>
  );
}

export default Login;