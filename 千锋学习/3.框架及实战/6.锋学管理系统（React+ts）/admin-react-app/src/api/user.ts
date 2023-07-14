import request from "@/utils/request";

export interface IUserType {
  username: string;
  password: string;
  autoLogin: boolean;
}
export const userLogin = (params: IUserType) => {
  return request.post("login", params);
};
