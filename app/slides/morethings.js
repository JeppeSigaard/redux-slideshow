import React, { Component } from "react";
import slideWrapper from "../components/slidewrapper";

class Slide extends Component {
  render() {
    return (
      <div className="slide-content">
        <h2>Redux is more things</h2>
        <h1>Middleware</h1>
        <p style={{ fontSize: "16px", textAlign: "center" }}>
          juuust in between an action and a reducer
        </p>
        <ul className="fadein-list">
          <li>thunk</li>
          <li>router</li>
          <li>developer tools</li>
          <br />
          <li style={{ fontSize: "14px" }}>Also a design pattern...</li>
        </ul>
      </div>
    );
  }
}

export default slideWrapper(Slide);
