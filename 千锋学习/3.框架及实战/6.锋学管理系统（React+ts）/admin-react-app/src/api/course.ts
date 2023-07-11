import request from "@/utils/request";

export const testPost = () => {
  return request.post("classes/ReactTest", {
    name: "张三",
    score: 100,
  });
};
