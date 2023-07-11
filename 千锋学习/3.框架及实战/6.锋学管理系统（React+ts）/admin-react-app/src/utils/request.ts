import axios from "axios";

const instance = axios.create({
  baseURL: "https://wwodq6q7.lc-cn-n1-shared.com/1.1/",
  headers: {
    "X-LC-Id": "wwOdq6Q7kUFDDajtYVIyxvVl-gzGzoHsz",
    "X-LC-Key": "7s73ro81YH0KTTNxIz0zL9uW",
    "Content-Type": "application/json",
  },
});

export default instance;
