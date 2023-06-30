import { useState } from "react";
import Popup from "./Popup";

export default function Comp1x3() {
  const [isShow, setIsShow] = useState(false);
  const close = () => {
    setIsShow(false);
  };
  return (
    <div>
      <button onClick={() => setIsShow(true)}>打开弹窗</button>
      {isShow && <Popup close={close}></Popup>}
    </div>
  );
}
