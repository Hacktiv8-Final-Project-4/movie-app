import { configureStore } from "@reduxjs/toolkit";
import { testSlice } from "../features/testSlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    test: testSlice.reducer,
    search: searchReducer,
  },
});
