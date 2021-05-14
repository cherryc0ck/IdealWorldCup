import { useEffect } from 'react';
import { useHistory } from 'react-router';
import styles from './login.module.css';

const Login = ({ authService, onLogout}) => {

  const history = useHistory();
  
  const onLogin = event => {
    //익명 로그인
    if(event.target.innerHTML === "Anonymous"){
      authService //
      .AnonymouslyLogin();
      return;
    }
    //구글, 깃 로그인
    authService //
    .login(event.currentTarget.textContent)
    // .then(data => goToMain(data.user.uid) );
    .then(data => console.log(data));
  }

  useEffect(()=>{
    authService.onAuthChange(user => {
      if(!user){
        history.push('/');
      }
      if(history.location.state.mypage === "mypage"){
        return;
      }
      user && goToMain(user.uid);
    });
  },[]);
  const goToMain = userId =>{
    history.push({
      pathname : '/main',
      state : {id : userId},
    });
  };

  const goToMyPage = () => {
    history.push({
      pathname : '/myPage',
      state : {mypage : "mypage"}
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