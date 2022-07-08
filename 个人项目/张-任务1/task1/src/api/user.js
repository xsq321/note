import axios from "axios";

// 获取用户列表
export const getUser = () => {
  return axios.request({
    url: "/api/getuser",
    method: "get",
  });
};

// 添加用户
export const addUser = (addForm) => {
  return axios.request({
    url: "/api/adduser",
    method: "post",
    data: { addForm },
  });
};

// 修改用户
export const updateUser = (updateForm) => {
  return axios.request({
    url: "/api/updateuser",
    method: "post",
    data: { updateForm },
  });
};

// 删除用户
export const deleteUser = (id) => {
  return axios.request({
    url: "/api/deleteuser",
    method: "get",
    params: { id },
  });
};

// 获取当前用户权限
export const getRank = () => {
  return axios.request({
    url: "/api/getrank",
    method: "get",
  });
};

// 修改当前用户权限
export const updateRank = (rank) => {
  return axios.request({
    url: "/api/updaterank",
    method: "post",
    data: { rank },
  });
};
