import { createSlice } from "@reduxjs/toolkit";
import { asyncAddAge } from "../actions/user";

const userSlice = createSlice({
  name: "user",
  initialState: { age: 16, name: "", status: "", error: "" },
  reducers: {
    addAge: (state, action) => {
      return { ...state, age: state.age + action.payload.val };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase("user/updateName", (state, action) => {
        state.name = action.payload.name;
      })
      .addCase(asyncAddAge.pending, (state) => {
        state.status = "loading";
      })
      .addCase(asyncAddAge.fulfilled, (state, action) => {
        console.log(action);
        state.age += 1;
        state.status = "success";
        state.error = "";
      })
      .addCase(asyncAddAge.rejected, (state, action) => {
        console.log(action);
        state.status = "error";
        // state.age += 1;
        state.error = action.error.message;
      });
  },
});

const userReducer = userSlice.reducer;
export default userReducer;
export const { addAge } = userSlice.actions;
