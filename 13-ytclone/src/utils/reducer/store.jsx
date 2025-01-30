import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice"
import searchReducer from "./searchSlice"
import LiveChatReducer from "./LiveChatSlice"

const store = configureStore({
    reducer:{
        nav:navReducer,
        search: searchReducer,
        chat :LiveChatReducer ,

    }
})
export default store