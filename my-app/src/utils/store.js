import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import animesReducer from "./animeSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    animes: animesReducer,
  },
});

export default store;
