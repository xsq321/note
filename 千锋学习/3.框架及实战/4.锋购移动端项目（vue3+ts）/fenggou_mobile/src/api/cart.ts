import req from './request'
import base from './base'

/**
 * 获取购物车列表  POST
 * @param userid string
 * @returns
 */
export const postCartListApi = (userid: string) =>
  req.post<any, CartNS.ICartItem[]>(base.cartList, { userid })

// 定义加入购物车商品接口
interface IAddCartItem {
  userid: string
  proid: string
  num: number
}
/**
 * 加入购物车
 * @param params IAddCartItem
 * @returns
 */
export const postAddCartApi = (params: IAddCartItem) => req.post<any, null>(base.addCart, params)

// 定义更新购物车商品数量接口
interface IUpdateCartNumItem {
  cartid: string
  num: number
}
/**
 * 更新购物车商品数量
 * @param params   IUpdateCartNumItem
 * @returns
 */
export const postUpdateCartNumApi = (params: IUpdateCartNumItem) =>
  req.post<any, null>(base.updaetCartNum, params)

/**
 * 删除购物车单条数据
 * @param cartid string
 * @returns
 */
export const postRemoveCartItemApi = (cartid: string) =>
  req.post<any, null>(base.removeCartItem, { cartid })

// 定义更新商品选中状态接口
interface IUpdateSelectCartItemParams {
  cartid: string
  flag: boolean
}
/**
 * 更新商品选中状态
 * @param params IUpdateSelectCartItemParams
 * @returns
 */
export const postUpdateSelectCartItemApi = (params: IUpdateSelectCartItemParams) =>
  req.post<any, null>(base.updateSelectCartItem, params)

interface IUpdateAllSelectParams {
  userid: string
  type: boolean
}
/**
 * 全选或全不选
 * @param params IUpdateAllSelectParams
 * @returns
 */
export const postUpdateAllSelectApi = (params: IUpdateAllSelectParams) =>
  req.post<any, null>(base.selectCartAll, params)
