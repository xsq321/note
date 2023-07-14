import request from "@/utils/request";

export const testPost = () => {
  return request.post("classes/ReactTest", {
    name: "张三",
    score: 100,
  });
};

// 添加类目
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
}
export const coursePost = (courseObj: ICourseType) => {
  return request.post("classes/ReactCourse", courseObj);
};

// 查询课程
export interface CourseConditionType {
  current?: number;
  pageSize?: number;
  created_at?: string;
  isvip?: boolean | string;
  name?: string | { $regex: string; $options: string };
  info?: string | { $regex: string; $options: string };
}
type CourseKeyType = keyof CourseConditionType;
export const courseGet = (params: CourseConditionType) => {
  delete params.current;
  delete params.pageSize;
  delete params.created_at;
  for (let attr in params) {
    if (params[attr as CourseKeyType] === "")
      delete params[attr as CourseKeyType];
  }
  if (params.isvip === "2") delete params.isvip;
  else if (params.isvip) {
    params.isvip = Boolean(Number(params.isvip));
  }
  if (params.info) {
    params.info = { $regex: `${params.info}`, $options: "i" };
  }
  if (params.name) {
    params.name = { $regex: `${params.name}`, $options: "i" };
  }
  let search = JSON.stringify(params);
  return request.get(`classes/ReactCourse?where=${search}`);
};
