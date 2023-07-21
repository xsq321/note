import { configureStore } from "@reduxjs/toolkit";
import user from "./modules/user";
const store = configureStore({
  reducer: {
    user,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
