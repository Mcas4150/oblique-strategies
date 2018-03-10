import React, { Component } from 'react';
import CardsAPI from './cardAPI';
import Animations from './animate';
import './card.css';
import {bouceOut, bounce, bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp,

bounceOutDown,

bounceOutLeft,

bounceOutRight,

bounceOutUp,

fadeIn,

fadeInDown,

fadeInDownBig,

fadeInLeft,

fadeInLeftBig,

fadeInRight,

fadeInRightBig,

fadeInUp,

fadeInUpBig,

fadeOut,

fadeOutDown,

fadeOutDownBig,

fadeOutLeft,

fadeOutLeftBig,

fadeOutRight,

fadeOutRightBig,

fadeOutUp,

fadeOutUpBig,

flash,

flip,
flipInX,

flipInY,

flipOutX,

flipOutY,

headShake,

hinge,

jello,

lightSpeedIn,

lightSpeedOut,

pulse,

rollIn,

rollOut,

rotateIn,

rotateInDownLeft,

rotateInDownRight,

rotateInUpLeft,

rotateInUpRight,

rotateOut,

rotateOutDownLeft,

rotateOutDownRight,

rotateOutUpLeft
,
rotateOutUpRight,

rubberBand,

shake,

slideInDown,

slideInLeft,

slideInRight,

slideInUp,

slideOutDown,

slideOutLeft,

slideOutRight,

slideOutUp,

swing,

tada,

wobble,

zoomIn,

zoomInDown,

zoomInLeft,

zoomInRight,
zoomInUp, zoomOut, zoomOutDown, zoomOutLeft, zoomOutRight, zoomOutUp} from 'react-animations';
import Radium, {StyleRoot} from 'radium';



let randomCard = CardsAPI[Math.floor(Math.random() * CardsAPI.length)];
let randAnimate= Animations[Math.floor(Math.random() * Animations.length)];

class Card extends Component {
    constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    let animatethis = [zoomInUp, zoomOut, zoomOutDown, zoomOutLeft, zoomOutRight, zoomOutUp];
    let pleasework = animatethis[Math.floor(Math.random() * animatethis.length)]
    this.state = {
      random: randomCard,
      backgroundColor : "lightgrey",
      color: "white",
      animation: "x 1s",
      animationName: Radium.keyframes(pleasework)
    };
  }


   handleClick() {
    // let randAnimate= Animations[Math.floor(Math.random() * Animations.length)];
    //  this.setState({ animationName: Radium.keyframes(animateNo, '${animateNo}')})
    let animatethis = [zoomInUp, zoomOut, zoomOutDown, zoomOutLeft, zoomOutRight, zoomOutUp];
    let pleasework = animatethis[Math.floor(Math.random() * animatethis.length)]
    this.setState({ animationName: Radium.keyframes(pleasework)})
      let randomCard = CardsAPI[Math.floor(Math.random() * CardsAPI.length)];
      this.setState({ random: randomCard });
      //  let randomFont = Fonts[Math.floor(Math.random() * Fonts.length)];
     // this.setState({ backgroundColor: `rgb(${rgb})`, fontFamily: randomFont})

  }

  render() {
    return (
      <StyleRoot>
          <div id="advice" style={this.state.animation, this.state.animationName, this.state.color}>{this.state.random}</div>
      </StyleRoot>
    );
  }
}

export default Card;


