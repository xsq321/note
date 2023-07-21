import request from "@/utils/request";
export interface IUserType {
  username: string;
  password: string;
  autoLogin: boolean;
}
// 登录
export const userLogin = (params: IUserType) => {
  return request.post("login", params);
};

// 更新用户信息
export interface UserInfoType {
  objectId: string;
  username: string;
  avatar: string;
  roleId?: string;
  roleName?: string;
  checkedKeys?: Array<string>;
}
export const userUpdate = (userId: string, params: IUserType) => {
  return request.put(`users/${userId}`, params);
};

//角色新增
export interface RoleType {
  objectId: string;
  roleName: string;
  checkedKeys: Array<string>;
  idx: number;
}
export const rolePost = (roleObj: RoleType) => {
  return request.post("classes/ReactRole1", roleObj);
};

// 角色查询
export const roleGet = (roleId: string = "") => {
  let params = roleId ? `/${roleId}` : "";
  return request.get(`classes/ReactRole1${params}`);
};

// 角色更新
export const rolePut = (roleId: string, roleObj: RoleType) => {
  return request.put(`classes/ReactRole1/${roleId}`, roleObj);
};

// 角色删除
export const roleDel = (roleId: string) => {
  return request.delete(`classes/ReactRole1/${roleId}`);
};

//角色批量删除
export const roleBatchDel = (roleIds: React.Key[]) => {
  let requests = roleIds.map((id) => {
    return {
      method: "DELETE",
      path: `/1.1/classes/ReactRole1/${id}`,
    };
  });
  return request.post("batch", { requests });
};

//账号新增
export interface UserType {
  objectId: string;
  username: string;
  password: string;
  roleId: string;
  roleName: string;
}
export const userPost = (userObj: UserType) => {
  return request.post("users", userObj);
};

//账号查询
export const userGet = () => {
  return request.get("users");
};
