import React, { Component } from "react";
import SlideContainer from "./slides";
import DevTools from "./devtools";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <SlideContainer />
        <DevTools />
      </div>
    );
  }
}
