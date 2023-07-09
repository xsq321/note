import { createAsyncThunk } from "@reduxjs/toolkit";
import goodsApi from "../../goodsApi";
import { updateIsShow, updateFormData } from "../slices/goods";

export const addGoods = createAsyncThunk(
  "goods/addGoods",
  async (arg, { dispatch, getState }) => {
    const { formData } = getState().goods;
    await goodsApi.createGoods(formData);
    dispatch(getGoods());
    dispatch(updateIsShow(false));
    dispatch(updateFormData({ key: "name", value: "" }));
    dispatch(updateFormData({ key: "price", value: "" }));
  }
);

export const getGoods = createAsyncThunk(
  "goods/getGoods",
  async (arg, { dispatch, getState }) => {
    const data = await goodsApi.getGoods();
    return data;
  }
);
