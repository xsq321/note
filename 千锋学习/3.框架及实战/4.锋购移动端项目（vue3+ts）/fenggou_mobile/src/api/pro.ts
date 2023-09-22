// 导出关于商品的接口请求函数
import base from './base'
import req from './request'

// 定义接口：约束获取商品列表参数
export interface IPageParams {
  count: number //页码,默认值为1
  limitNum?: number // 每页显示个数,默认值为10
}

/**
 * 获取商品列表
 * @param params  IPageParams
 * @returns
 */
export const getProListApi = (params: IPageParams) =>
  req.get<any, GoodsNS.IGoodsItem[]>(base.proList, { params })

// /pro/detail/:proid
/**
 * 获取商品详情
 * @param proid
 * @returns
 */
export const getProDetailApi = (proid: string) =>
  req.get<any, GoodsNS.IGoodsItem>(`${base.proDetail}/${proid}`)
