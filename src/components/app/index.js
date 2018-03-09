import React, { Component } from 'react';
import './App.css';
import Menu from "../menu/index";
import Main from "../main/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Main/>
      </div>
    );
  }
}

export default App;
