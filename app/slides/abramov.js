import React, { Component } from "react";
import slideWrapper from "../components/slidewrapper";

class Slide extends Component {
  constructor() {
    super();
    this.minimize = this.minimize.bind(this);
  }

  minimize() {
    const min = this.props.console.min;
    this.props.toggleMinimize(!min);
  }

  render() {
    const min = this.props.console.min;
    let cl = "console";
    if (min) cl += " minimize";
    return (
      <div className="slide-content">
        <h3>I abramov'ed...</h3>
        <div className={cl}>
          <header className="console-header">
            <span className="console-btn yellow" onClick={this.minimize}>
              {min && "+"}
              {!min && "-"}
            </span>
            <span className="console-btn red">&times;</span>
          </header>
          <div className="console-body">
            <pre>
              git clone https://github.com/JeppeSigaard/redux-slideshow.git
            </pre>
            <pre>npm install</pre>
            <pre>npm start</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default slideWrapper(Slide);
