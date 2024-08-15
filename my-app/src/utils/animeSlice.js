import { createSlice } from "@reduxjs/toolkit";

const animesSlice = createSlice({
  name: "anime",
  initialState: {
    nowPlayingAnimes: null,
  },
  reducers: {
    addNowPlayingAnimes: (state, action) => {
      state.nowPlayingAnimes = action.payload;
    },
  },
});
export const { addNowPlayingAnimes } = animesSlice.actions;
export default animesSlice.reducer;
