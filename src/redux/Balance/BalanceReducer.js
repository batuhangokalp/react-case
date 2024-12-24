import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageValue = (key) =>
  localStorage.getItem(key) ? Number(localStorage.getItem(key)) : 0;

const initialState = {
  "Yakıt Bakiyesi": getLocalStorageValue("fuel"),
  "Nakit Bakiyesi": getLocalStorageValue("cash"),
  "Uçuş Bakiyesi": getLocalStorageValue("flight"),
  "Yol Geçiş Bakiyesi": getLocalStorageValue("toll"),
  "Yemek Bakiyesi": getLocalStorageValue("food"),
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setFuelBalance: (state, action) => {
      state["Yakıt Bakiyesi"] += action.payload;
    },
    setCashBalance: (state, action) => {
      state["Nakit Bakiyesi"] += action.payload;
    },
    setFlightBalance: (state, action) => {
      state["Uçuş Bakiyesi"] += action.payload;
    },
    setTollBalance: (state, action) => {
      state["Yol Geçiş Bakiyesi"] += action.payload;
    },
    setFoodBalance: (state, action) => {
      state["Yemek Bakiyesi"] += action.payload;
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
