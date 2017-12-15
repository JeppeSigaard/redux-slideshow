import React, { Component } from "react";
import slideWrapper from "../components/slidewrapper";

class Slide extends Component {
  render() {
    return (
      <div className="slide-content">
        <h2>Redux is 3 things</h2>
        <h1>Store</h1>
        <ul>
          <li>Everything the app knows in one place</li>
          <li>
            Components get to have{" "}
            <span style={{ textDecoration: "line-through" }}>state</span> props
          </li>
        </ul>
        <div className="black-box">
          <pre>
            const store = createStore(<br />
            &nbsp; rootReducer,<br />
            &nbsp; initialState,<br />
            &nbsp; middleWare,<br />);
          </pre>
        </div>
      </div>
    );
  }
}

export default slideWrapper(Slide);
