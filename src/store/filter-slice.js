import { createSlice } from "@reduxjs/toolkit";
const initialFilterState = {
  totalCount: "50",
  selectedCategory: "",
  selectedCity: "",
  selectedVenue: "",
  selectedDate: "",
  skip: 0,
};
const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilterState,
  reducers: {
    setTotalActivities(state, action) {
      state.totalCount = action.payload;
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setSelectedCity(state, action) {
      state.selectedCity = action.payload;
    },
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
    resetFilter(state) {
      state.selectedCategory = "";
      state.selectedCity = "";
      state.selectedCategory = "";
      state.selectedVenue = "";
    },
    setSkipActivities(state, action) {
      state.skip = action.payload;
    },
    setSelectedVenue(state, action) {
      state.selectedVenue = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
