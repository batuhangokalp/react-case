import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./Balance/BalanceReducer";
import couponReducer from "./Coupon/CouponReducer";

const store = configureStore({
  reducer: {
    balance: balanceReducer,
    coupon: couponReducer,
  },
});

export default store;
