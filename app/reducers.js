import { combineReducers } from "redux";

const slide = function(state = 1, action) {
  switch (action.type) {
    case "INCREMENT_SLIDE":
      return state + 1;
    case "DECREMENT_SLIDE":
      return state - 1;
    default:
      return state;
  }
};

const loggedIn = function(state = false, action) {
  switch (action.type) {
    case "LOG_IN":
      return true;
    case "LOG_OUT":
      return false;
  }
  return state;
};

const console = function(state = { min: false }, action) {
  switch (action.type) {
    case "MINIMIZE_CONSOLE":
      return { ...state, min: true };
    case "MAXIMIZE_CONSOLE":
      return { ...state, min: false };
  }
  return state;
};

const hamburger = function(state = false, action) {
  switch (action.type) {
    case "OPEN_HAMBURGER":
      return true;
    case "CLOSE_HAMBURGER":
      return false;
  }
  return state;
};

const async = function(state = { state: "unstarted", msg: "" }, action) {
  switch (action.type) {
    case "ASYNC_ACTION":
      return { ...state, state: action.state, msg: action.msg };
  }
  return state;
};

const rootReducer = combineReducers({
  loggedIn,
  slide,
  hamburger,
  console,
  async
});
export default rootReducer;
