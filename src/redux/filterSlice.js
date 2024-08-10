import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filteredComents: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filteredComents } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors
export const selectFilteredComents = (state) => state.filter.filter;
