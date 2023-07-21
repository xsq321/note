import request from "@/utils/request";

//测试
export const testPost = () => {
  return request.post("classes/ReactTest", { name: "三丰", score: 100 });
};

//新增分类
export interface ICategoryParams {
  objectId?: string;
  cateName: string;
  fatherId: string;
  status: boolean;
  children?: ICategoryParams[];
}
export const categoryPost = (cateObj: ICategoryParams) => {
  return request.post("classes/ReactCategory", cateObj);
};

// 查询类目
interface CateConditionType {
  fatherId?: string;
}
export const categoryGet = (where: CateConditionType = { fatherId: "0-0" }) => {
  return request.get("classes/ReactCategory", {
    params: {
      where,
    },
  });
};

// 更新类目
export const categoryPut = (objectId: string, status: boolean) => {
  return request.put(`classes/ReactCategory/${objectId}`, { status });
};

// 课程录入
export interface ICourseType {
  name: string;
  info: string;
  poster: string;
  isvip: boolean;
  category: [string, string];
  catelv1: string;
  catelv2: string;
  desc: string;
}
export const coursePost = (courseObj: ICourseType) => {
  return request.post("classes/ReactAricle", courseObj);
};

// 加载课程
export interface CourseConditionType {
  current?: number;
  pageSize?: number;
  created_at?: string;
  isvip?: string | boolean;
  name?: string;
  info?: string | { $regex: string; $options: "i" };
}
type CourseKeyType = keyof CourseConditionType;
export const courseGet = (params: CourseConditionType) => {
  delete params.current;
  delete params.pageSize;
  delete params.created_at;
  for (let attr in params) {
    if (params[attr as CourseKeyType] == "") {
      delete params[attr as CourseKeyType];
    }
  }
  if (params.isvip && params.isvip !== "2") {
    params.isvip = Boolean(Number(params.isvip)); // 0-false  1-true
  }
  // 所有课程
  if (params.isvip && params.isvip == "2") {
    delete params.isvip;
  }
  if (params.info) {
    params.info = { $regex: `${params.info}`, $options: "i" };
  }
  let search = JSON.stringify(params);
  return request.get(`classes/ReactAricle?where=${search}`);
};
