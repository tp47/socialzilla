import { configureStore } from "@reduxjs/toolkit";
import { darkModeReducer } from "./darkMode/darkMode.slice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export { store };
