import { arrayOfKeysReducerTemplate } from "./utils";
const defaultState = [];

// const booksReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case "BOOKS_ADD":
//       return [...state, action.payload];

//     case "BOOKS_DELETE":
//       return state.filter((item) => {
//         return item != action.payload;
//       });

//     case "BOOKS_UPDATE":
//       return state.map((item) => {
//         if (item != action.payload.current){
//           return item
//         } else {
//           return action.payload.new
//         }
//       })
//     case "BOOKS_SET":
//       return action.payload
//     default:
//       return state
//   }
// };

export default arrayOfKeysReducerTemplate("BOOKS", defaultState);
