import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState:{
    nowPlayingMovies:null
  },
  reducers: {
    getMoviesNow: (state, action) => {
      state.nowPlayingMovies =action.payload
    },
  },
});

export const { getMoviesNow } = movieSlice.actions;
export default movieSlice.reducer;
