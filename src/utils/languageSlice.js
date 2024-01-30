import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name:"language",
    initialState:{
        lang:'English',
    },
    reducers:{
        updateLanguage:(state,action)=>{
            state.lang=action.payload
        }
    }
})
export const {updateLanguage}=languageSlice.actions
export default languageSlice.reducer