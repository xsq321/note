import ReactDOM from "react-dom";
import Styles from "./popup.module.scss";

export default function Popup(props) {
  return ReactDOM.createPortal(
    props.isShow && (
      <div className={Styles.box}>
        <div className={Styles.content}>
          <div>弹窗</div>
          <div>{props.children}</div>
        </div>
      </div>
    ),
    document.body
  );
}
