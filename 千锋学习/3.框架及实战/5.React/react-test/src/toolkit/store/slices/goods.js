import { createSlice } from "@reduxjs/toolkit";
import { addGoods, getGoods } from "../actions/goods";

const goodsSlice = createSlice({
  name: "goods",
  initialState: {
    isShow: false,
    goodsList: [],
    formData: { name: "", price: "" },
  },
  reducers: {
    updateIsShow: (state, action) => {
      state.isShow = action.payload;
    },
    updateFormData: (state, action) => {
      state.formData[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addGoods.fulfilled, (state, action) => {
        // console.log(action);
      })
      .addCase(getGoods.fulfilled, (state, action) => {
        state.goodsList = [...action.payload];
      });
  },
});

export default goodsSlice.reducer;
export const { updateIsShow, updateFormData } = goodsSlice.actions;
