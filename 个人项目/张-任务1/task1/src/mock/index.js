import Mock from "mockjs";

const getQuery = (url, name) => {
  const index = url.indexOf("?");
  const queryStrArr = url.substr(index + 1).split("&");
  for (var i = 0; i < queryStrArr.length; i++) {
    const itemArr = queryStrArr[i].split("=");
    if (itemArr[0] === name) {
      return itemArr[1];
    }
  }
  return null;
};

Mock.mock(/\/api\/test/, "get", (option) => {
  console.log(option);
  const name = getQuery(option.url, "name");
  console.log(name);
  return {
    status: 200,
    msg: "get请求成功",
    str: "test",
  };
});
