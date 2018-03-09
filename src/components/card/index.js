import React, { Component } from 'react';
import CardsAPI from './cardAPI';
import './card.css';


class Card extends Component {
    constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      random: "Click",
      backgroundColor : "lightgrey",
    };
  }

   handleClick() {
      // document.getElementById('advice').animate([
      //    { transform: 'translateX(0px)' },
      //    { transform: 'translateX(-100px)' }
      //   ], { duration: 100
      //   });
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
      <div className="Card animated bounce" onClick={this.handleClick.bind(this)} style={ this.state }>
        <div id="advice" class="animated bounceInRight">{this.state.random}</div>
      </div>
    );
  }
}

export default Card;


