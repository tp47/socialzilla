import { configureStore } from "@reduxjs/toolkit";
import { darkModeReducer } from "./darkMode/darkMode.slice";
import apiSlice from "../api/api.slice";
import authReducer from "./auth/auth.slice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    darkMode: darkModeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: import.meta.env.MODE === "development",
});

export { store };
