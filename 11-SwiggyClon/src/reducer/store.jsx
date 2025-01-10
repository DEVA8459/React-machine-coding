import {configureStore} from "@reduxjs/toolkit"
import searchTermReducer from "./SearchTermSlice"
const store = configureStore({
    reducer :{
        restaurant :searchTermReducer,
    }
})
export default store