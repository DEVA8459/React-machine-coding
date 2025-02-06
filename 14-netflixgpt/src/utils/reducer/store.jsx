import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./UserSlice"
import moviesReducer from "./movieSlice"
import configReducer from "./configSlice"
import gptReducer from "./gptSlice"
const store = configureStore({
    reducer:{
        user :userReducer ,
        movies:moviesReducer,
        config:configReducer,
        gpt:gptReducer

    }
})

export default store