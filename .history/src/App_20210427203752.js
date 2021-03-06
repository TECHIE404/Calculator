
import './App.css';
import Button from './components/button'
import Input from './components/input';
import ClearButton from './components/clear';
function App() {
  return (
    <div className="App">
      <div className="calc-wrapper">
      <div className="row">
         <Input></Input>
      </div>
      <div className="row">
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>/</Button>
      </div>
      <div className="row">
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>*</Button>
      </div>
      <div className="row">
      <Button>1</Button>

      <Button>2</Button>
      <Button>3</Button>
      <Button>+</Button>
      </div>
      <div className="row">
      <Button>.</Button>
      <Button>0</Button>
      <Button>=</Button>
      <Button>-</Button>
      </div>
      <div>
        <ClearButton>Clear</ClearButton>
      </div>
      </div>
    </div>
  );
}

export default App;
