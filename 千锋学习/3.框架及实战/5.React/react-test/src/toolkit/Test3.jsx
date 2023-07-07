import { useSelector, useDispatch } from "react-redux";
import { addAge } from "./store/slices/user";
import { updateName, asyncAddAge } from "./store/actions/user";

export default function Test3() {
  const { age, name, status, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {age} -- {name}
        <p>状态：{status}</p>
        <p>错误信息：{error}</p>
      </div>
      <button onClick={() => dispatch(addAge({ val: 3 }))}>age+3</button>
      <input
        type="text"
        onChange={(e) => dispatch(updateName(e.target.value))}
      />
      <button onClick={() => dispatch(asyncAddAge())}>age异步+1</button>
    </div>
  );
}
