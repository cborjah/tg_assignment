import React, { Component } from "react";
import "./App.css";

import { Button } from "../Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="buttonContainer">
          <Button type={"checkMark"} />
        </div>
        <div className="buttonContainer">
          <Button type={"radio"} />
        </div>
      </div>
    );
  }
}

export default App;
