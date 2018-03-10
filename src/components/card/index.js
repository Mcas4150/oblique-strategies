import React, { Component } from 'react';
import CardsAPI from './cardAPI';
import Fonts from './fonts';
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


// const styles = {
//     fadeInUp: {
//           animation: 'x 2s',
//           animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
//         }
// }
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
      let rgb = []
      for (var i = 0; i < 3; i++) {
        let r = Math.floor(Math.random() * 256)
        rgb.push(r)
      }

    // let randAnimate= Animations[Math.floor(Math.random() * Animations.length)];
    //  this.setState({ animationName: Radium.keyframes(animateNo, '${animateNo}')})
    let animatethis = [zoomInUp, zoomOut, zoomOutDown, zoomOutLeft, zoomOutRight, zoomOutUp];
    let pleasework = animatethis[Math.floor(Math.random() * animatethis.length)]
    this.setState({ animationName: Radium.keyframes(pleasework)})
     this.setState({ backgroundColor: `rgb(${rgb})`})
      let randomCard = CardsAPI[Math.floor(Math.random() * CardsAPI.length)];
      this.setState({ random: randomCard });
      //  let randomFont = Fonts[Math.floor(Math.random() * Fonts.length)];
     // this.setState({ backgroundColor: `rgb(${rgb})`, fontFamily: randomFont})

  }

  render() {
    return (
      <StyleRoot>
        <div className="Card animated bounce" onClick={this.handleClick.bind(this)} style={ this.state}>
          <div id="advice" style={this.state.animation, this.state.animationName, this.state.color}>{this.state.random}</div>
        </div>
      </StyleRoot>
    );
  }
}

export default Card;


