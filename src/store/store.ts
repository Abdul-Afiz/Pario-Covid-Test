import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import covidDataReducer from "./reducer";

const store = configureStore({
  reducer: {
    data: covidDataReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
