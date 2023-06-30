import ReactDOM from "react-dom";
import Styles from "./popup.module.scss";

export default function Popup(props) {
  return ReactDOM.createPortal(
    <div className={Styles.box}>
      <div className={Styles.content}>
        <div>弹窗</div>
        <button onClick={props.close}>关闭</button>
      </div>
    </div>,
    document.body
  );
}
