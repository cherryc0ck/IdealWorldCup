import { useEffect} from 'react';
import { useHistory } from 'react-router';
import styles from './login.module.css';

const Login = ({ authService, onLogout}) => {
  const history = useHistory();

  const onLogin = event => {
    const target = event.target.innerHTML;
    //익명 로그인
    if(target === "Anonymous"){
      authService //
      .AnonymouslyLogin()
      .then(data=> goToMain(data.user.uid));
    }
    //구글, 깃 로그인
    if(target === "Google" || target === "Github"){
      authService //
      .login(event.currentTarget.textContent)
      .then(data => goToMain(data.user.uid) );
    }
  }
  useEffect(()=>{
    authService.onAuthChange(user => {
      if(!user){
        history.push('/');
      }
    });
  },[]);

  const goToMain = userId =>{
    console.log("goToMaIN");
    history.push({
      pathname : '/main',
      state : {id : userId},
    });
  };

  const goToMyPage = () => {
    console.log("goToMyPage");
    history.push({
      pathname : '/myPage'
    });
  };

  return(
    <div className={styles.container}>
      {
        onLogout && 
        <>
          <button className={styles.button} onClick={onLogout}>Logout</button>
          <button className={styles.button} onClick={goToMyPage}>MyPage</button>
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