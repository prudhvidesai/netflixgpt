import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptpagestat:false,
        gptMovies:null,
        gptMovieResults:null
    },
    reducers:{
        showGptPage:(state,action)=>{
          state.gptpagestat=!state.gptpagestat
        },
        addGptMovies:(state,action)=>{
            const{movieNames,movieResults}=action.payload
            state.gptMovies=movieNames
            state.gptMovieResults=movieResults
        },
        removeMovies:(state)=>{
            state.gptMovies=null
            state.gptMovieResults=null
        }
    }
})
export const{showGptPage,addGptMovies,removeMovies}=gptSlice.actions
export default gptSlice.reducer