import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="timer">
          <div className="time">
          <span>00:</span>
          <span>30:</span>
          <span>00</span>
          </div>
          <div className="timerText"> 
          <span>Hour</span>
          <span>Minute</span>
          <span>Second</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
