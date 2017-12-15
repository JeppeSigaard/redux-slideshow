import React, { Component } from "react";
import slideWrapper from "../components/slidewrapper";

class Slide extends Component {
  render() {
    return (
      <div className="slide-content">
        <h2>Redux is 3 things</h2>
        <h1>Reducers</h1>
        <ul>
          <li>Sorta like Array.reduce(acc, val)</li>
          <li>
            <b>Reducer + Flux ≈ Redux</b>
          </li>
          <li>
            <span style={{ fontStyle: "italic" }}>All</span> actions pass
            through <span style={{ fontStyle: "italic" }}>all</span> reducers
          </li>
        </ul>
        <div className="black-box">
          <pre>
            {"const slide = function(state = 1, action) {"} <br />
            &nbsp; {"switch (action.type) {"} <br />
            &nbsp; &nbsp; {'case "INCREMENT_SLIDE":'} <br />
            &nbsp; &nbsp; &nbsp; return state + 1; <br />
            &nbsp; &nbsp; return state; <br />
            &nbsp; {"}"} <br />
            {"};"} <br />
          </pre>
        </div>
      </div>
    );
  }
}

export default slideWrapper(Slide);
