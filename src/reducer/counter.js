const initialState = false;

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return true;

    case "LOGOUT":
      return false;

    default:
      return state;
  }
};

export default countReducer;
