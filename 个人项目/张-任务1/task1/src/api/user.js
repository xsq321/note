import axios from "axios";

export const getUser = (name) => {
  return axios.request({
    url: "/api/test",
    method: "get",
    params: {
      name: name,
    },
  });
};
