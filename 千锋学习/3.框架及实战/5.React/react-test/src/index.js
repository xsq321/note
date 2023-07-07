import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";

// import App from "./App";
import RouterComponent from "./router-component";
import { Provider } from "react-redux";
// import store from "./store";
import store from "./toolkit/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterComponent></RouterComponent>
  </Provider>
);
// console.log(root);
