import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './login.module.css';

const Login = ({ authService, onLogout, loginKind, cardRepository}) => {
  const history = useHistory();

  const historyState = useHistory().state;
  const [userId, setUserId] = useState(historyState && historyState.id);

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
      if(user){
        setUserId(user.uid);
      }else if(!user) {
        history.push('/');
      }
    });
  });


  const goToMain = user =>{
    console.log(user);
    console.log("goToMain에 의해 메인일때")
    history.push({
      pathname : '/main',
      id : {id : user.uid}
    });
  };

  const goToPage = (event) => {
    const target = event.target.innerHTML;
    authService.onAuthChange(user => {
      if(target === "Main"){
        console.log("메인일떄");
        history.push({
          pathname : '/main',
          id : {id : user.uid}
        });
      }else if(target === "MyPage"){
        console.log("마이페이지일때");
        history.push({
          pathname : '/mypage',
          id : {id : user.uid}
        })
      }
    });
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