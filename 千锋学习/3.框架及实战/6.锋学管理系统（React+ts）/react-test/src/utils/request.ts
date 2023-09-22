import axios from "axios";
import store2 from "store2";

const instance = axios.create({
  baseURL: "https://wwodq6q7.lc-cn-n1-shared.com/1.1/",
  headers: {
    "X-LC-Id": "wwOdq6Q7kUFDDajtYVIyxvVl-gzGzoHsz",
    "X-LC-Key": "7s73ro81YH0KTTNxIz0zL9uW",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    if (config.url?.indexOf("users") !== -1 && config.method === "put") {
      let info = store2.get("userInfo") || store2.session.get("userInfo");
      config.headers["X-LC-Session"] = info.sessionToken;
    }
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
