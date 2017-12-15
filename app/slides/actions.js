import React, { Component } from "react";
import slideWrapper from "../components/slidewrapper";

class Slide extends Component {
  render() {
    return (
      <div className="slide-content">
        <h2>Redux is 3 things</h2>
        <h1>Actions</h1>
        <ul>
          <li>Everything the app can do</li>
          <li>store.dispatch() to Store</li>
        </ul>
        <div className="black-box">
          <pre>
            {"function actionCreator(...vars) {"} <br />
            &nbsp; {'return { type: "ACTION_TYPE", all, the, things }'} <br />
            {"}"}
          </pre>
        </div>
      </div>
    );
  }
}

export default slideWrapper(Slide);
