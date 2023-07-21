import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import Cloud from "leancloud-storage";
import { ID, KEY, BASE } from "@/config";
import { Provider } from "react-redux";
import store from "./store";
Cloud.init({
  appId: ID,
  appKey: KEY,
  serverURL: BASE,
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#6E48C2",
          },
        }}
      >
        <Provider store={store}>
          <App />
        </Provider>
      </ConfigProvider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
