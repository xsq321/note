import { IUserType, roleGet, userLogin } from "@/api/user";
import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import store2 from "store2";
import { UserInfoType } from "@/api/user";
// export interface UserInfoType {
//   username: string;
//   objectId: string;
//   sessionToken: string;
//   avatar: string;
// }
export interface UserStateType {
  isLogin: boolean;
  isLoading: boolean;
  userInfo: UserInfoType | null;
}
let initialState: UserStateType = {
  isLogin: false,
  isLoading: false,
  userInfo: null,
};
let info =
  store2.get("fx-admin-userinfo") || store2.session.get("fx-admin-userinfo");
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
      state.isLogin = true;
      state.isLoading = false;
      let { userInfo, autoLogin } = action.payload;
      state.userInfo = userInfo;
      let auto = autoLogin ? true : false;
      store2("autoLogin", auto); //登录成功后，记录自动登录状态
      if (autoLogin) {
        store2("fx-admin-userinfo", userInfo);
      } else {
        store2.session("fx-admin-userinfo", userInfo);
      }
    },
    loginFail(state) {
      //登录失败、退出登录
      state.isLogin = false;
      state.isLoading = false;
      state.userInfo = null;
      store2.remove("fx-admin-userinfo");
      store2.session.remove("fx-admin-userinfo");
    },
    loginUpdate(state, action) {
      let auto = store2.get("autoLogin"); //登录成功后，记录自动登录状态
      state.userInfo = action.payload;
      if (auto) {
        store2("fx-admin-userinfo", action.payload);
      } else {
        store2.session("fx-admin-userinfo", action.payload);
      }
    },
  },
});
export const userLoginAsync = (
  params: IUserType,
  dispatch: Dispatch,
  navigate: NavigateFunction
) => {
  dispatch(loginStart()); //开始登录
  setTimeout(() => {
    userLogin(params)
      .then(async (res) => {
        let role = await roleGet(res.data.roleId);
        console.log("角色信息", role);
        dispatch(
          loginSuccess({
            userInfo: { ...res.data, ...role.data },
            autoLogin: params.autoLogin,
          })
        ); //登录成功
        navigate("/");
      })
      .catch((err) => {
        dispatch(loginFail()); //登录失败
      });
  }, 1000);
};
export const { loginStart, loginSuccess, loginFail, loginUpdate } =
  userSlice.actions;
export default userSlice.reducer;
