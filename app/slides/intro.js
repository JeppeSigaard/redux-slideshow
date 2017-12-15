import React, { Component } from "react";
import slideWrapper from "../components/slidewrapper";

class Slide extends Component {
  render() {
    return (
      <div className="slide-content">
        <img
          style={{ marginTop: "100px" }}
          src="/assets/img/redux-logo.png"
          alt=""
          width="500"
        />
      </div>
    );
  }
}

export default slideWrapper(Slide);
