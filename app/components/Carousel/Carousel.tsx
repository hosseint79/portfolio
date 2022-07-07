import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";

import { config } from "react-spring";

let slides = [
  {
    key: 11,
    content: <img src="https://picsum.photos/800/801/?random" alt="1" />
  },
  {
    key: 22,
    content: <img src="https://picsum.photos/800/802/?random" alt="2" />
  },
  {
    key: 33,
    content: <img src="https://picsum.photos/600/803/?random" alt="3" />
  },


];

export default class Example extends Component {
  state = {
    goToSlide: 1,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };



  render() {
    return (
      <div style={{ width: "800px", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      
         
      </div>
    );
  }
}
