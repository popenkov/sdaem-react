import { combineReducers } from "redux";

import header from "./header";
import footer from "./footer";
import newsList from "./newsList";

export const rootReducer = combineReducers({
  header: header,
  footer: footer,
  newsList: newsList,
});

//получаем тип рутРедьюсера
export type RootState = ReturnType<typeof rootReducer>;
