import { combineReducers } from "redux";

import header from "./header";
import footer from "./footer";

const rootReducer = combineReducers({
  header: header,
  footer: footer,
});

export default rootReducer;
