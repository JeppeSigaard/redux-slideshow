import { combineReducers } from "redux";

const user = function(state = {}, action) {
  switch (action.type) {
    case "USER_REQUEST":
      return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({ user });

export default rootReducer;
