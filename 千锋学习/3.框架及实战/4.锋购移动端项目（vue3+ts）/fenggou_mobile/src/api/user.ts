// 用户登录

import base from './base'
import req from './request'

// 定义登录参数接口
export interface ILoginParams {
  loginname: string
  password: string
}
/**
 * 登录
 * @param params  ILoginParams
 * @returns
 */
export const postLoginApi = (params: ILoginParams) =>
  req.post<any, { token: string; userid: string }>(base.login, params)

/**
 * 获取用户信息
 * @param userid
 * @returns
 */
export const getUserInfoApi = (userid: string) =>
  req.get<any, UserNS.IUserInfo[]>(base.userinfo, { params: { userid } })

// 定义注册参数 接口
interface IRegisterParams {
  tel: string
  password: string
}
/**
 * 注册
 * @param params IRegisterParams
 * @returns
 */
export const postRegisterApi = (params: IRegisterParams) =>
  req.post<any, string>(base.register, params)
