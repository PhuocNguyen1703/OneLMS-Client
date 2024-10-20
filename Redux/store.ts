import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import layoutReducer from "./slices/layoutSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      modal: modalReducer,
      layout: layoutReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
