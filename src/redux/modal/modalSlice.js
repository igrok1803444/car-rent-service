import { createSlice } from "@reduxjs/toolkit";

const modalInitialState = {
  isOpen: false,
  data: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState: modalInitialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.data = action.payload;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReduser = modalSlice.reducer;
