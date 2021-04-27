
import './App.css';
import Button from './components/button'

function App() {
  return (
    <div className="App">
      <div className="calc-wrapper">
      <div className="Row">
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>/</button>
      </div>
      <div className="Row">
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>*</button>
      </div>
      <div className="Row">
      <button>1</button>

      <button>2</button>
      <button>3</button>
      <button>+</button>
      </div>
      <div className="Row">
      <button>.</button>
      <button>0</button>
      <button>=</button>
      <button>-</button>
      </div>
      </div>
    </div>
  );
}

export default App;
