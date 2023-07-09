import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import goodsReducer from "./slices/goods";

const store = configureStore({
  reducer: { user: userReducer, goods: goodsReducer },
});

export default store;
