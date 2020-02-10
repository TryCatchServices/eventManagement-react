import React, { Component } from "react";
import BackgroundImage from "./images/event-background.jpg";

class Home extends Component {
  state = {};
  style = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${BackgroundImage})`
  };
  render() {
    return (
      <div style={this.style}>
        <h1>Home page</h1>
      </div>
    );
  }
}

export default Home;
