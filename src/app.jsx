import styles from './app.module.css';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  return (
    <div className={styles.app}>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
