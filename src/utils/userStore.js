import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from './movieSlice'
import gptReducer from './gptSlice'
import languageReducer from './languageSlice'

const userStore = configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gpt:gptReducer,
        language:languageReducer,
    }
})
export default userStore