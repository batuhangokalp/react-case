import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "Yakıt Bakiyesi": localStorage.getItem("fuel")
    ? Number(localStorage.getItem("fuel"))
    : 0,
  "Nakit Bakiyesi": localStorage.getItem("cash")
    ? Number(localStorage.getItem("cash"))
    : 0,
  "Uçuş Bakiyesi": localStorage.getItem("flight")
    ? Number(localStorage.getItem("flight"))
    : 0,
  "Yol Geçiş Bakiyesi": localStorage.getItem("toll")
    ? Number(localStorage.getItem("toll"))
    : 0,
  "Yemek Bakiyesi": localStorage.getItem("food")
    ? Number(localStorage.getItem("food"))
    : 0,
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
