import { ADD } from "../namespace/user";

function addAge(val) {
  return {
    type: ADD,
    payload: { val },
  };
}

export default { addAge };
