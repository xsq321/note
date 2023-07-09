class Goods {
  constructor() {
    const data = sessionStorage.getItem("qf-goods-data");
    this.goods = data ? JSON.parse(data) : [];
  }

  time = 500;

  /**
   * 获取商品
   * @returns
   */
  getGoods() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.goods);
      }, this.time);
    });
  }

  /**
   * 创建商品
   * @param {} params
   * @returns
   */
  createGoods(params) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!params) {
          reject("不能不传");
          return;
        }
        console.log(params, this.goods);
        this.goods = [...this.goods, { ...params }];
        resolve("成功");
        this.keepData();
      }, this.time);
    });
  }

  /**
   * 传一个列表的下表
   * @param {*} index
   * @returns
   */
  delGoods(index) {
    return new Promise((resolve, reject) => {
      if (typeof index !== "number") {
        reject("必须传数值");
      }
      const goods = [...this.goods];
      goods.splice(index, 1);
      this.goods = goods;
      resolve();
      this.keepData();
    });
  }

  /**
   * 传一个下标 在传一个数据
   * @param {*} index
   * @param {*} data
   * @returns
   */
  updateGoods(index, data) {
    return new Promise((resolve, reject) => {
      if (typeof index !== "number") {
        reject("必须传数值");
      }

      const goods = [...this.goods];
      goods[index] = data;

      this.goods = [...goods];
      resolve();
      this.keepData();
    });
  }

  /**
   * 根据下标获取最新的数据
   * @param {*} index
   * @returns
   */
  getGoodsDetail(index) {
    return new Promise((resolve, reject) => {
      if (typeof index !== "number") {
        reject("必须传数值");
      }
      resolve(this.goods[index]);
    });
  }

  async keepData() {
    const data = await this.getGoods();
    sessionStorage.setItem("qf-goods-data", JSON.stringify(data));
  }
}

export default new Goods();
