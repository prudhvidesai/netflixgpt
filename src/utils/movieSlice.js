import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailer:null,
        popularMovies:null,
        topMovies:null,
        upcomingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
          state.nowPlayingMovies=action.payload
        },
        addTrailer:(state,action)=>{
          state.trailer=action.payload
        },
        addPopularMovies:(state,action)=>{
          state.popularMovies=action.payload
        },
        addTopMovies:(state,action)=>{
           state.topMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
          state.upcomingMovies=action.payload
        }
    }
})
export default movieSlice.reducer
export const {addNowPlayingMovies,addTrailer,addPopularMovies,addTopMovies,addUpcomingMovies} = movieSlice.actions