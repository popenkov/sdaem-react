import { combineReducers } from "redux";

import header from "./header";
import footer from "./footer";
import newsList from "./newsList";

const rootReducer = combineReducers({
  header: header,
  footer: footer,
  newsList: newsList,
});

export default rootReducer;
