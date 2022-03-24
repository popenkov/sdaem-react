const initialState = {
  newsList: [],
  newsData: {},
};

const news = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_NEWS_LIST":
      return {
        ...state,
        newsList: payload,
      };

    case "SET_NEWS_DATA":
      return {
        ...state,
        newsData: payload,
      };

    default:
      return state;
  }
};

export default news;
