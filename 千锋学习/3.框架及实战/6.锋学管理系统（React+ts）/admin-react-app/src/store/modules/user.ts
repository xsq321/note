import { IUserType, userLogin } from "@/api/user";
import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import store2 from "store2";

export interface UserInfoType {
  username: string;
  objectId: string;
  sessionToken: string;
  avatar: string;
}
export interface UserStateType {
  isLogin: boolean;
  isLoading: boolean;
  userInfo: null | UserInfoType;
}
let initialState: UserStateType = {
  isLogin: false,
  isLoading: false,
  userInfo: null,
};
let info = store2.get("userInfo") || store2.session.get("userInfo");
if (info) {
  initialState.isLogin = true;
  initialState.userInfo = info;
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart(state) {
      state.isLoading = true;
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.isLogin = true;
      let { userInfo, atuoLogin } = action.payload;
      state.userInfo = userInfo;
      if (atuoLogin) {
        store2("userInfo", userInfo);
      } else {
        store2.session("userInfo", userInfo);
      }
    },
    loginFail(state) {
      state.isLoading = false;
      state.isLogin = false;
      state.userInfo = null;
      store2.remove("userInfo");
      store2.session.remove("userInfo");
    },
  },
});

export const userLoginAsync = (
  params: IUserType,
  dispatch: Dispatch,
  navigate: NavigateFunction
) => {
  dispatch(loginStart());
  setTimeout(() => {
    userLogin(params)
      .then((res) => {
        dispatch(
          loginSuccess({ userInfo: res.data, atuoLogin: params.autoLogin })
        );
        navigate("/");
      })
      .catch((err) => {
        dispatch(loginFail());
      });
  }, 1000);
};
export const { loginStart, loginSuccess, loginFail } = userSlice.actions;
export default userSlice.reducer;
