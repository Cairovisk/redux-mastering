import './App.css';
import Intervalo from './components/Intervalo';
import Soma from './components/Soma';
import Media from './components/Media';
import Sorteio from './components/Sorteio';

function App() {
  return (
    <div className="App">
      <Intervalo title="Intervalo de números"></Intervalo>
      <div className="Cards">
        <Soma></Soma>
        <Media></Media>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
