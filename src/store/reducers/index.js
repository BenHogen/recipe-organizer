import { combineReducers } from "redux";
import recipieBooksReducer from "./recipieBooksReducer";
import booksReducer from "./booksReducer";
import sectionsReducer from "./sectionsReducer";

export default combineReducers({
  recipieBooks: recipieBooksReducer,
  booksReducer: booksReducer,
  sectionsReducer: sectionsReducer,
});
