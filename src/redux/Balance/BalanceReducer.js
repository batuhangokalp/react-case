import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "Yakıt Bakiyesi": 0,
  "Nakit Bakiyesi": 0,
  "Uçuş Bakiyesi": 0,
  "Yol Geçiş Bakiyesi": 0,
  "Yemek Bakiyesi": 0,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setFuelBalance: (state, action) => {
      state.fuel = action.payload;
    },
    setCashBalance: (state, action) => {
      state.cash = action.payload;
    },
    setFlightBalance: (state, action) => {
      state.flight = action.payload;
    },
    setTollBalance: (state, action) => {
      state.toll = action.payload;
    },
    setFoodBalance: (state, action) => {
      state.food = action.payload;
    },
  },
});

export const {
  setFuelBalance,
  setCashBalance,
  setFlightBalance,
  setTollBalance,
  setFoodBalance,
} = balanceSlice.actions;

export default balanceSlice.reducer;
