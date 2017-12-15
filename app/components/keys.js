import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { bindActionCreators } from "redux";

class Keys extends Component {
  constructor() {
    super();
    this.handleKey = this.handleKey.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  handleKey(e) {
    if (e.keyCode === 39) {
      this.nextSlide();
    }

    if (e.keyCode === 37) {
      this.prevSlide();
    }
  }

  nextSlide() {
    if (this.props.slide < this.props.max) {
      this.props.setSlide(true);
    }
  }
  prevSlide() {
    if (this.props.slide > 1) {
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
    return (
      <div className="keys">
        <div className="prev-slide" onClick={this.prevSlide}>
          <svg id="icon-chevron-left" viewBox="0 0 32 32">
            <path d="M19.219 7.448c-1.040-1.041-2.731-1.041-3.771 0l-8.553 8.552 8.553 8.552c0.52 0.521 1.203 0.781 1.885 0.781s1.365-0.26 1.885-0.781c1.041-1.041 1.041-2.729 0-3.771l-4.78-4.781 4.78-4.781c1.041-1.041 1.041-2.729 0-3.771z" />
          </svg>
        </div>
        <div className="next-slide" onClick={this.nextSlide}>
          <svg id="icon-chevron-right" viewBox="0 0 32 32">
            <path d="M11.448 7.448c-1.041 1.041-1.041 2.729 0 3.771l4.78 4.781-4.78 4.781c-1.041 1.041-1.041 2.729 0 3.771 0.52 0.521 1.203 0.781 1.885 0.781s1.365-0.26 1.885-0.781l8.553-8.552-8.553-8.552c-1.040-1.041-2.731-1.041-3.771 0z" />
          </svg>
        </div>
      </div>
    );
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
