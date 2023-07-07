import { UPDATE } from "../namespace/goods";
const initialState = {
  show: false,
};

const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default goodsReducer;
