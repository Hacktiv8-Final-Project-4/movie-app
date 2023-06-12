import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { persistConfig } from "../config/persistConfig";
import searchReducer from "../features/searchSlice";
import favoritesReducer from "../features/favoritesSlice";

const rootReducer = combineReducers({
  search: searchReducer,
  favorites: favoritesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

export { store, persistor };
