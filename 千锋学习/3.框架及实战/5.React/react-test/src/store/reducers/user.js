import { ADD } from "../namespace/user";
const initialState = {
  age: 18,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return { ...state, age: state.age + action.payload.val };
    }
    default:
      return state;
  }
};

export default userReducer;
