declare namespace GoodsNS {
  // 定义商品对象接口
  interface IGoodsItem {
    banners: string[] // 轮播图
    proid: string
    category: string
    brand: string
    proname: string
    originprice: number
    desc: string
    discount: number
    img1: string
  }
}
