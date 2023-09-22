import request from "@/utils/request";

export interface IUserType {
  username: string;
  password: string;
  autoLogin: boolean;
}
export const userLogin = (params: IUserType) => {
  return request.post("login", params);
};

// 修改用户信息
export interface UserInfoType {
  objectId: string;
  username: string;
  avatar: string;
}
export const userUpdate = (userId: string, params: IUserType) => {
  return request.put(`users/${userId}`, params);
};
