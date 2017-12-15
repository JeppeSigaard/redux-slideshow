export const login = function(l) {
  if (l) return { type: "LOG_IN" };
  return { type: "LOG_OUT" };
};

export const logout = function() {
  return { type: "LOG_OUT" };
};

export const setSlide = function(inc) {
  if (inc) return { type: "INCREMENT_SLIDE" };
  return { type: "DECREMENT_SLIDE" };
};

export const toggleMinimize = function(min) {
  if (min) return { type: "MINIMIZE_CONSOLE" };
  return { type: "MAXIMIZE_CONSOLE" };
};

export const doAsync = function() {
  return (dispatch, getState) => {
    dispatch({
      type: "ASYNC_ACTION",
      state: "pending",
      msg: "Pretend I'm calling an api..."
    });

    setTimeout(() => {
      dispatch({ type: "ASYNC_ACTION", state: "complete", msg: "Done!" });
    }, 4000);
  };
};
