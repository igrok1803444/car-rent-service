import { createSlice } from "@reduxjs/toolkit";
import { getCars, loadMore } from "./operations";

const handlePending = (state, payload) => {
  state.cars.isLoading = true;
};
const handleRejected = (state, payload) => {
  state.cars.isLoading = false;
};

const carsInitialState = {
  cars: {
    items: [],
    isLoading: false,
    page: 1,
  },
};
const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.rejected, handleRejected)
      .addCase(getCars.fulfilled, (state, action) => {
        state.cars.items = action.payload;
        state.cars.isLoading = false;
        state.cars.page = 2;
      })
      .addCase(loadMore.rejected, handleRejected)
      .addCase(loadMore.pending, handlePending)
      .addCase(loadMore.fulfilled, (state, action) => {
        state.cars.items.push(...action.payload);
        state.cars.isLoading = false;
        state.cars.page += 1;
      });
  },
});

export const carsReducer = carsSlice.reducer;
