const initialState = {
  header: [],
};

const header = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_HEADER":
      return {
        ...state,
        header: payload,
      };

    default:
      return state;
  }
};

export default header;
