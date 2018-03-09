import React, { Component } from 'react';
import CardsAPI from './cardAPI';
import './card.css';






class Card extends Component {

    constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      random: ""
    };
  }




   handleClick() {
      var randomCard = CardsAPI[Math.floor(Math.random() * CardsAPI.length)];
      this.setState({ random: randomCard });
  }



  render() {
    return (
      <div className="Card">
        <div>{this.state.random}</div>
        <button onClick={this.handleClick.bind(this)}>Get Quote</button>
      </div>
    );
  }
}

export default Card;
