import React, { Component } from 'react';
import './App.css';

import Button from './Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type={"checkMark"} text={"Check box"} />
        <Button type={"radio"} text={"Radio button"} />
      </div>
    );
  }
}

export default App;
