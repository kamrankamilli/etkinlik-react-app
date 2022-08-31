import { configureStore } from "@reduxjs/toolkit";
import activityReducer from "./activity-slice";
import filterReducer from "./filter-slice";
const store = configureStore({
  reducer: { activity: activityReducer, filter: filterReducer },
});
export default store;
