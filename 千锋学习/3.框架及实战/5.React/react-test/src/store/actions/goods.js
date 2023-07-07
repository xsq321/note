import { UPDATE } from "../namespace/goods";

function updateShow(val) {
  return {
    type: UPDATE,
    payload: {
      show: val,
    },
  };
}

const goodsActionCreators = { updateShow };
export default goodsActionCreators;
