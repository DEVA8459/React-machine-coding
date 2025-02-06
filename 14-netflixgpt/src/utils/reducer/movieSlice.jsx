import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState:{
    nowPlayingMovies:null ,
    toggleGPT:false
  },
  reducers: {
    getMoviesNow: (state, action) => {
      state.nowPlayingMovies =action.payload
    },
    toggleSearchgpt:(state)=>{
      state.toggleGPT = !state.toggleGPT
    }
  },
});

export const { getMoviesNow ,toggleSearchgpt } = movieSlice.actions;
export default movieSlice.reducer;
