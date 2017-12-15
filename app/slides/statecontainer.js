import React, { Component } from "react";
import slideWrapper from "../components/slidewrapper";

class Slide extends Component {
  render() {
    const slide = this.props.slide;
    return (
      <div className="slide-content">
        <h2>Redux is a</h2>
        {slide === 4 && <h1>Predictable state container</h1>}
        {slide === 5 && <h1>Reliable state container?</h1>}
        {slide > 5 && (
          <h1>
            Reliable<span style={{ textDecoration: "underline" }}> state </span>container?
          </h1>
        )}
        {slide > 6 && (
          <div className="black-box" style={{ width: "600px", margin: "auto" }}>
            <pre>{"this.state = {}"}</pre>
            {slide > 6 && <pre>{"this.setState({})"}</pre>}
          </div>
        )}
        {slide > 7 && (
          <pre>
            {
              "const stateManagerArray = [‘redux’,’flux’,’mobX’,’flummux’,’alt’,’NuclearJS’]"
            }
          </pre>
        )}
      </div>
    );
  }
}

export default slideWrapper(Slide);
