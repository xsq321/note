import { useDispatch, useSelector } from "react-redux";
import Popup from "./Popup";
import { updateIsShow, updateFormData } from "./store/slices/goods";
import { addGoods, getGoods } from "./store/actions/goods";
import { useEffect } from "react";

export default function GoodsList() {
  const { isShow, formData, goodsList } = useSelector((state) => state.goods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoods());
  }, []);
  return (
    <div>
      <button onClick={() => dispatch(updateIsShow(true))}>添加</button>
      {goodsList.map((item, index) => {
        return (
          <p key={index}>
            {item.name} --- {item.price}
          </p>
        );
      })}
      <Popup isShow={isShow}>
        商品名称：
        <input
          type="text"
          value={formData.name}
          onChange={(e) =>
            dispatch(updateFormData({ key: "name", value: e.target.value }))
          }
        />
        <br />
        商品价格：
        <input
          type="text"
          value={formData.price}
          onChange={(e) =>
            dispatch(updateFormData({ key: "price", value: e.target.value }))
          }
        />
        <button onClick={() => dispatch(addGoods())}>确定</button>
        <button onClick={() => dispatch(updateIsShow(false))}>取消</button>
      </Popup>
    </div>
  );
}
