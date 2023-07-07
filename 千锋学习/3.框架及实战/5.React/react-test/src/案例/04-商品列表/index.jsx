import Popup from "../../测试与练习/03-弹框/Popup";
import { useSelector } from "react-redux";
import { useActions } from "../../store/utils";
import goodsActionCreators from "../../store/actions/goods";

export default function Comp2x3() {
  const { show } = useSelector((state) => state.goods);
  const { updateShow } = useActions(goodsActionCreators);

  const close = () => {
    updateShow(false);
  };
  return (
    <div>
      <div>
        <button onClick={() => updateShow(true)}>添加</button>
        {show && <Popup close={close}>sldfj</Popup>}
      </div>
    </div>
  );
}
