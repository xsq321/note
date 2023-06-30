import React from "react";

export default class Cart extends React.Component {
  state = {
    all: false,
    goods: [
      { name: "羊肉串", price: 10, count: 1, check: false },
      { name: "猪肉串", price: 20, count: 1, check: false },
      { name: "牛肉串", price: 30, count: 1, check: false },
    ],
  };
  changeAll() {
    this.setState({ all: !this.state.all }, () => {
      this.setState({
        goods: this.state.goods.map((item) => {
          item.check = this.state.all;
          return item;
        }),
      });
    });
  }
  changeCount(index, val) {
    if (this.state.goods[index].count === 0 && val < 0) return;
    this.state.goods[index].count += val;
    this.setState({ goods: this.state.goods });
  }
  changeCheck(index) {
    this.state.goods[index].check = !this.state.goods[index].check;
    this.setState({ goods: this.state.goods }, () => {
      this.setState({ all: this.state.goods.every((item) => item.check) });
    });
  }
  getTotalPrice() {
    let total = 0;
    this.state.goods.forEach((item) => {
      total += item.check ? item.price * item.count : 0;
    });
    return total;
  }
  render() {
    return (
      <div>
        <h3>购物车</h3>
        <div>
          <label>
            全选{" "}
            <input
              type="checkbox"
              checked={this.state.all}
              onChange={() => this.changeAll()}
            />
          </label>
        </div>
        <div>
          {this.state.goods.map((item, index) => (
            <p key={item.name}>
              <input
                type="checkbox"
                onChange={() => this.changeCheck(index)}
                checked={this.state.goods[index].check}
              />
              --- 商品名：{this.state.goods[index].name}--- 价格：
              {this.state.goods[index].price}--- 数量：
              <button onClick={() => this.changeCount(index, 1)}>+</button>{" "}
              {this.state.goods[index].count}{" "}
              <button onClick={() => this.changeCount(index, -1)}>-</button>---
              小计：
              {this.state.goods[index].count * this.state.goods[index].price}
            </p>
          ))}
        </div>
        <div>总计：{this.getTotalPrice()}</div>
      </div>
    );
  }
}
