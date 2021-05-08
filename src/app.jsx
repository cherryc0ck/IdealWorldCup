import styles from './app.module.css';
import Header from './components/header/header';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <Header authService={authService} />
    </div>
  );
}

export default App;
