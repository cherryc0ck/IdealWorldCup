import React  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header/header';
import Main from './components/main/main';
import MyPage from './components/myPage/myPage';

function App({ FileInput, authService }) {

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <Header authService={authService} />
          </Route>
          <Route path="/main">
            <Main authService={authService} />
          </Route>
          <Route path="/mypage">
            <MyPage FileInput={FileInput} authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
