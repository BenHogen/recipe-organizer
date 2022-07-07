import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import reducers from "./store/reducers";

const store = createStore(
  // reducers
  () => {},
  applyMiddleware(thunk)
);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
