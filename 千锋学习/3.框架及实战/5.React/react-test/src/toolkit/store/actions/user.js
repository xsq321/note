import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateName = (name) => {
  return {
    type: "user/updateName",
    payload: { name },
  };
};

const delay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
export const asyncAddAge = createAsyncThunk(
  "user/asyncAddAge",
  async (arg, { dispatch, getState, extra }) => {
    await delay();
    const { user } = getState();
    if (user.age === 20) {
      throw new Error("age为20时报错");
    }
  }
);
