import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { bindActionCreators } from "redux";

class Keys extends Component {
  constructor() {
    super();
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(e) {
    if (e.keyCode === 39 && this.props.slide < this.props.max) {
      this.props.setSlide(true);
    }

    if (e.keyCode === 37 && this.props.slide > 1) {
      this.props.setSlide(false);
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKey);
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...actions }, dispatch);
};

const mapStateToProps = state => {
  return {
    slide: state.slide
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Keys);
