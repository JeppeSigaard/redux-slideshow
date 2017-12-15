import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div className="slide-count">
        <span>{this.props.slide}</span>
        <span> / </span>
        <span>{this.props.max}</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    slide: state.slide
  };
};

export default connect(mapStateToProps)(Counter);
