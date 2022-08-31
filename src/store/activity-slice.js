import { createSlice } from "@reduxjs/toolkit";

const initialActivityState = {
  activities: [],
  categories: [],
  cities: [],
  venues:[]
};

const activitySlice = createSlice({
  name: "activity",
  initialState: initialActivityState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setActivities(state, action) {
      state.activities = action.payload;
    },
    setCities(state, action) {
      state.cities = action.payload;
    },
    setVenues(state, action) {
      state.venues = action.payload;
    },
    filteredByDate(state, action) {
      state.activities = state.activities.filter((activity) =>
        activity.start.includes(action.payload)
      );
    },
  },
});

export const activityActions = activitySlice.actions;
export default activitySlice.reducer;
