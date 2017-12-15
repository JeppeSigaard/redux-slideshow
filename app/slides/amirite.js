import React, { Component } from "react";
import slideWrapper from "../components/slidewrapper";

class Slide extends Component {
  render() {
    return (
      <div className="slide-content">
        <img src="/assets/img/amitheonlyone.jpg" width="540" />
      </div>
    );
  }
}

export default slideWrapper(Slide);
