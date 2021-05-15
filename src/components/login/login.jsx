import { useEffect } from 'react';
import { useHistory } from 'react-router';
import styles from './login.module.css';

const Login = ({ authService, onLogout, loginKind}) => {
  const history = useHistory();

  

  const onLogin = event => {
    const target = event.target.innerHTML;
    //익명 로그인
    if(target === "Anonymous"){
      authService //
      .AnonymouslyLogin()
      .then(data=> goToMain(data.user));
    }
    //구글, 깃 로그인
    if(target === "Google" || target === "Github"){
      authService //
      .login(event.currentTarget.textContent)
      .then(data => goToMain(data.user) );
    }
  }
  useEffect(()=>{
    authService.onAuthChange(user => {
      if(!user){
        history.push('/');
      }
    });
  });


  const goToMain = user =>{
    console.log(user);
    history.push({
      pathname : '/main'
    });
  };



  const goToPage = (event) => {
    const target = event.target.innerHTML;
    if(target === "Main"){
      history.push({
        pathname : '/main'
      });
    }else if(target === "MyPage"){
      history.push({
        pathname : '/mypage'
      });
    }
  };

  return(
    <div className={styles.container}>
      {
        onLogout && 
        <>
          <button className={styles.button} onClick={onLogout}>Logout</button>
          <button className={styles.button} onClick={goToPage}>
            {loginKind ? "Main" : "MyPage"}  
          </button>
        </>
      }
      {
        onLogout ||
        <>
          <button className={styles.button} onClick={onLogin}>Google</button>
          <button className={styles.button} onClick={onLogin}>Github</button>
          <button className={styles.button} onClick={onLogin}>Anonymous</button>
        </>
      }

    </div>
  );
}

export default Login;