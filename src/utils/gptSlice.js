import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptpagestat:false,
    },
    reducers:{
        showGptPage:(state,action)=>{
          state.gptpagestat=!state.gptpagestat
        }
    }
})
export const{showGptPage}=gptSlice.actions
export default gptSlice.reducer