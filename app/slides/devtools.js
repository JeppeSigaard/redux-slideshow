import React, { Component } from "react";
import slideWrapper from "../components/slidewrapper";

class Slide extends Component {
  render() {
    return (
      <div className="slide-content">
        <h1>Redux Dev Tools</h1>
        <div className="black-box">
          <pre>
            [<strong>Ctrl + H</strong>] Toggle devTools
          </pre>
          <pre>
            [<strong>Ctrl + Q</strong>] Toggle position
          </pre>
          <pre>
            [<strong>Ctrl + M</strong>] Toggle module
          </pre>
        </div>
      </div>
    );
  }
}

export default slideWrapper(Slide);
