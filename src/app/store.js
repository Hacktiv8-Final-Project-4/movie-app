import { configureStore } from "@reduxjs/toolkit";
import { testSlice } from "../features/testSlice";
import searchReducer from "../features/searchSlice";
import favoritesReducer from "../features/favoritesSlice";

export const store = configureStore({
  reducer: {
    test: testSlice.reducer,
    search: searchReducer,
    favorites: favoritesReducer,
  },
});
