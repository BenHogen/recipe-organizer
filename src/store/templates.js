export const simpleActionTemplate = (type) => {
  return (payload) => {
    return (dispatch) => {
      dispatch({
        type: type,
        payload: payload,
      });
    };
  };
};

export const updateActionTemplate = (type) => {
  return (update, current) => {
    return (dispatch) => {
      dispatch({
        type: type,
        payload: {
          update: update,
          current: current,
        },
      });
    };
  };
};
