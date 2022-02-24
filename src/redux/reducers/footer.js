const initialState = {
  footer: [],
};

const footer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FOOTER":
      return {
        ...state,
        footer: action.payload,
      };

    default:
      return state;
  }
};

export default footer;
