import React, { Component } from 'react';
import './App.css';
import Button from './components/button'
import Input from './components/input';
import ClearButton from './components/clear';
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      input:"",
      previousNumber:"",
      currentNumber:"",
      operator:"",
    };
  }
  addToInput=val=>{
    this.setState(
      {input: this.state.input+val}
    );
  };
  addZeroToInput=val=>{
    if(this.state.input!==""){
      this.setState({input:this.state.input+val});
    }
  };
  addDecimal=val=>{
    this.setState({input:this.state.input+val});
  };
  clearInput=()=>{
    this.setState({input:""});
  }
render(){
  return (
    <div className="App">
      <div className="calc-wrapper">
      <div className="row">
         <Input>{this.state.input}</Input>
      </div>
      <div className="row">
      <Button handleClick={this.addToInput}>7</Button>
      <Button handleClick={this.addToInput}>8</Button>
      <Button handleClick={this.addToInput}>9</Button>
      <Button >/</Button>
      </div>
      <div className="row">
      <Button handleClick={this.addToInput}>4</Button>
      <Button handleClick={this.addToInput}>5</Button>
      <Button handleClick={this.addToInput}>6</Button>
      <Button >*</Button>
      </div>
      <div className="row">
      <Button handleClick={this.addToInput}>1</Button>

      <Button handleClick={this.addToInput}>2</Button>
      <Button handleClick={this.addToInput}>3</Button>
      <Button h>+</Button>
      </div>
      <div className="row">
      <Button handleClick={this.addDecimal}>.</Button>
      <Button handleClick={this.addZeroToInput}>0</Button>
      <Button handleClick={this.addToInput}>=</Button>
      <Button >-</Button>
      </div>
      <div>
        <ClearButton handleClick={this.clearInput}>Clear</ClearButton>
      </div>
      
    </div>
    </div>
  );
}
}

export default App;
