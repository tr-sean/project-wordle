import Game from '../Game';
import Header from '../Header';

import styles from '../../styles.css'

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default App;
