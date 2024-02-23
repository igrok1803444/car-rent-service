import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  make: "",
  mileage: {
    min: 0,
    max: Infinity,
  },
  price: Infinity,
};
const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setMakeFilter: (state, action) => {
      state.make = action.payload;
    },
    setMileageFilterMin: (state, action) => {
      state.mileage.min = Number(action.payload);
    },
    setMileageFilterMax: (state, action) => {
      state.mileage.max = Number(action.payload);
    },
    setPriceFilter: (state, action) => {
      state.price = Number(action.payload);
    },
  },
});

export const {
  setMakeFilter,
  setMileageFilterMin,
  setMileageFilterMax,
  setPriceFilter,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
