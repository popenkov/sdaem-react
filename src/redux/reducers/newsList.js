const initialState = {
  newsList: [],
};

const newsList = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_NEWS_LIST":
      return {
        ...state,
        newsList: payload,
      };
    default:
      return state;
  }
};

export default newsList;
