import { combineReducers } from "redux";
import main from "./main";
import booksReducer from "./booksReducer";
import sectionsReducer from "./sectionsReducer";

export default combineReducers({
  main: main,
  booksReducer: booksReducer,
  sectionsReducer: sectionsReducer,
});
