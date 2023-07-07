import { useSelector } from "react-redux";

import { useActions } from "./store/utils";
import userActionCreators from "./store/actions/user";

export default function Test() {
  const age = useSelector((state) => state.user.age);

  const actions = useActions(userActionCreators);

  const add = () => {
    actions.addAge(2);
  };
  return (
    <div>
      <div>{age}</div>
      <button onClick={() => add()}>age+2</button>
    </div>
  );
}
