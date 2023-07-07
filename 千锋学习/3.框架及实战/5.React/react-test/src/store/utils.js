import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useMemo } from "react";

export function useActions(actionCreators) {
  const dispatch = useDispatch();
  return useMemo(() => {
    return bindActionCreators(actionCreators, dispatch);
  }, [actionCreators]);
}
