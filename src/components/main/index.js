import React, { Component } from 'react';
import './main.css';
import Card from "../card/index";
import CardsAPI from '../card/cardAPI';
import Radium, {StyleRoot} from 'radium';


let randomCard = CardsAPI[Math.floor(Math.random() * CardsAPI.length)];


class Main extends Component {
    constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      random: randomCard,
      backgroundColor : "lightgrey",
      color: "white",
    };
  }

   handleClick() {
      let rgb = []
      for (var i = 0; i < 3; i++) {
        let r = Math.floor(Math.random() * 256)
        rgb.push(r)
      }
     this.setState({ backgroundColor: `rgb(${rgb})`})
      let randomCard = CardsAPI[Math.floor(Math.random() * CardsAPI.length)];
      this.setState({ random: randomCard });
  }

  render() {
    return (
      <StyleRoot>
        <div className="Main animated bounce" onClick={this.handleClick.bind(this)} style={ this.state}>
          <div id="advice">{this.state.random}</div>
        </div>
      </StyleRoot>
    );
  }
}

export default Main;
