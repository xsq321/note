import { configureStore } from "@reduxjs/toolkit";
import { Store } from "antd/es/form/interface";
import user from "./modules/user";
const store = configureStore({
  reducer: {
    user,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
