import { combineReducers } from "redux";

import header from "./header";
import footer from "./footer";
import newsList from "./newsList";
import adsOnMap from "./adsonmap";

const rootReducer = combineReducers({
  header: header,
  footer: footer,
  newsList: newsList,
  adsOnMap: adsOnMap,
});

export default rootReducer;
