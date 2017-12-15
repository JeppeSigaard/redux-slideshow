import React, { Component } from "react";
import slideWrapper from "../components/slidewrapper";

class Slide extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.doAsync();
  }

  render() {
    const { slide, async } = this.props;
    return (
      <div className="slide-content">
        {slide === 14 && (
          <div>
            <h1>Thunk</h1>
            <p>
              A subroutine used to inject an additional calculation into another
              subroutine. Yada yada blahdiblah...
            </p>
            <p>
              <b>tl:dr; Async actions</b>
            </p>
          </div>
        )}
        {slide === 15 && (
          <div>
            <h1>redux-thunk</h1>
            <div className="async-box">
              <a href="#" onClick={this.onClick} className="async-btn">
                Do a redux-thunk
              </a>
              <div className="black-box" style={{ width: "600px" }}>
                <pre>Status: {async.state}</pre>
                <pre>Message: {async.msg}</pre>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default slideWrapper(Slide);