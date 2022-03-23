export interface NewsListState {
  newsList: any[];
}

const SET_NEWS_LIST = "SET_NEWS_LIST";

export interface setNewsListAction {
  type: typeof SET_NEWS_LIST;
  payload: [];
}

const initialState: NewsListState = {
  newsList: [],
};

const newsList = (
  state = initialState,
  { type, payload }: setNewsListAction
): NewsListState => {
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
