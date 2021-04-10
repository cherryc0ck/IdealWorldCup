import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Mypage from './components/mypage/mypage';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <Header authService={authService} />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/mypage">
            <Mypage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
