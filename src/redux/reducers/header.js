const initialState = {
  header: [],
};

const header = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HEADER":
      return {
        ...state,
        header: action.payload,
      };

    default:
      return state;
  }
};

export default header;
