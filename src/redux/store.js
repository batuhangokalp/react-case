import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./Balance/BalanceReducer";

const store = configureStore({
  reducer: {
    balance: balanceReducer,
  },
});

export default store;
