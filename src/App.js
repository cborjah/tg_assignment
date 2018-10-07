import React, { Component } from "react";
import "./App.css";

import Button from "./Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type={"checkMark"} />
        <Button type={"radio"} />
      </div>
    );
  }
}

export default App;
