import React, { Component } from "react";
import "./App.css";
import Smurf from "./smurf"
class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Smurfs Village:</h1>
        <Smurf />
      </div>
    );
  }
}

export default App;
