import Mock from "mockjs";

// 原始数据
const userList = [
  { id: "001", username: "admin", password: "123456", rank: "admin" },
  { id: "002", username: "vip", password: "123456", rank: "vip" },
  { id: "003", username: "user", password: "123456", rank: "user" },
];
var rank = "admin";

//拆分 get 请求参数
const getQuery = (url, name) => {
  const index = url.indexOf("?");
  if (index !== -1) {
    const queryStrArr = url.substr(index + 1).split("&");
    for (var i = 0; i < queryStrArr.length; i++) {
      const itemArr = queryStrArr[i].split("=");
      if (itemArr[0] === name) {
        return itemArr[1];
      }
    }
  }
  return null;
};

// 获取用户列表
Mock.mock(/\/api\/getuser/, "get", () => {
  return {
    status: 200,
    msg: "get请求成功",
    userList,
  };
});

// 添加用户
Mock.mock("/api/adduser", "post", (options) => {
  const body = JSON.parse(options.body);
  const addForm = body.addForm;
  const userItem = Mock.mock({
    "id|100-999": 100,
    username: addForm.username,
    password: addForm.password,
    rank: addForm.rank,
  });
  userList.push(userItem);
  return {
    status: 200,
    msg: "添加用户成功",
    userList,
  };
});

// 修改用户
Mock.mock("/api/updateuser", "post", (options) => {
  const body = JSON.parse(options.body);
  const updateForm = body.updateForm;
  const index = userList.findIndex((item) => item.id === updateForm.id);
  userList.splice(index, 1, updateForm);
  return {
    status: 200,
    msg: "修改用户成功",
    userList,
  };
});

// 删除用户,尝试一下 get 传参的处理方式
Mock.mock(/\/api\/deleteuser/, "get", (options) => {
  const id = getQuery(options.url, "id");
  const index = userList.findIndex((item) => item.id === id);
  userList.splice(index, 1);
  return {
    status: 200,
    msg: "删除用户成功",
    userList,
  };
});

//获取当前权限
Mock.mock("/api/getrank", "get", () => {
  return {
    status: 200,
    msg: "获取当前用户权限成功",
    rank,
  };
});

//修改当前权限
Mock.mock("/api/updaterank", "post", (options) => {
  const body = JSON.parse(options.body);
  rank = body.rank;
  return {
    status: 200,
    msg: "修改当前用户权限成功",
  };
});
