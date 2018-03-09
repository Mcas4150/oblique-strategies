import React, { Component } from 'react';
import CardsAPI from './cardAPI';
import './card.css';





  const cards = [
      "Remove specifics and convert to ambiguities",
      "Think of the radio",
      "Don't be frightened of clichés",
      "Allow an easement (an easement is the abandonment of a stricture",
      "What is the reality of the situation",
      "Simple subtraction"
    ];



class Card extends Component {

    constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      random: ""
    };
  }




   handleClick() {
      var randomCard = cards[Math.floor(Math.random() * cards.length)];
      this.setState({ random: randomCard });
  }



  render() {
    return (
      <div className="Card">
        <button onClick={this.handleClick.bind(this)}>Get Quote</button>
        <div>{this.state.random}</div>


       {/* {CardsAPI.cards.map(p => (
          <div className="advice">{p.advice}</div>
          ))}*/}
      </div>
    );
  }
}

export default Card;
