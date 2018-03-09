import React, { Component } from 'react';
import CardsAPI from './cardAPI';
import './card.css';

class Card extends Component {
    constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      random: "click to draw"
    };
  }

   handleClick() {
      document.getElementById('advice').animate([
         { transform: 'translateY(0px)' },
         { transform: 'translateY(-50px)' }
        ], { duration: 500
        });
      var randomCard = CardsAPI[Math.floor(Math.random() * CardsAPI.length)];
      this.setState({ random: randomCard });
  }

  render() {
    return (
      <div className="Card" onClick={this.handleClick.bind(this)}>
        <div id="advice">{this.state.random}</div>
      </div>
    );
  }
}

export default Card;


