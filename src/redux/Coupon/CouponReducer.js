import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Kuponlar: JSON.parse(localStorage.getItem("coupons")) || [],
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    setCoupon: (state, action) => {
      state.Kuponlar.push(action.payload); 
      localStorage.setItem("coupons", JSON.stringify(state.Kuponlar)); 
    },
  },
});

export const { setCoupon } = couponSlice.actions;

export default couponSlice.reducer;
