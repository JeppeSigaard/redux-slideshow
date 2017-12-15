import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { bindActionCreators } from "redux";

import Counter from "./counter";
import Keys from "./keys";

import Intro from "../slides/intro";
import Amirite from "../slides/amirite";
import Abramov from "../slides/abramov";
import StateContainer from "../slides/statecontainer";
import Example from "../slides/example";
import OneState from "../slides/onestate";
import Actions from "../slides/actions";
import Reducers from "../slides/reducers";
import More from "../slides/morethings";
import ThunkDemo from "../slides/thunk-demo";
import DevTools from "../slides/devtools";

const SlideContainer = props => {
  const max = 16;
  const slide = props.slide;
  return (
    <div className="slide-container">
      <Keys max={max} />
      <Counter max={max} />
      {slide === 1 && <Intro />}
      {slide === 2 && <Amirite />}
      {slide === 3 && <Abramov />}
      {slide >= 4 && slide < 9 && <StateContainer />}
      {slide === 9 && <Example />}
      {slide === 10 && <OneState />}
      {slide === 11 && <Actions />}
      {slide === 12 && <Reducers />}
      {slide === 13 && <More />}
      {slide > 13 && slide < 16 && <ThunkDemo />}
      {slide === 16 && <DevTools />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    slide: state.slide
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...actions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideContainer);
