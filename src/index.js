import React from "react";
import store from "./redux/redux-store.js";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "./StoreContext.js";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = () => {
  console.log("store", store.getState());
  ReactDOM.render(
    <BrowserRouter>
      <Provider>
        <App store={store} />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
