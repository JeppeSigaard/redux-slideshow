import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { bindActionCreators } from "redux";

export default function slideWrapper(WrappedComponent) {
  class Slide extends React.Component {
    render() {
      return (
        <div className="slide">
          <div className="slide-center">
            <WrappedComponent {...this.props} />
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
      slide: state.slide,
      login: state.login,
      console: state.console,
      loggedIn: state.loggedIn,
      async: state.async
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(Slide);
}
