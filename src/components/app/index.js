import React, { Component } from 'react';
import './App.css';
import Menu from "../menu/index";
import Card from "../card/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Card/>
      </div>
    );
  }
}

export default App;
