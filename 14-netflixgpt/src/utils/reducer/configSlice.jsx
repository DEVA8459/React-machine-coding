import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers:{
        changeLnguage :(state ,action) =>{
            state.lang = action.payload
        }
    }
})

export const{changeLnguage} =configSlice.actions
export default configSlice.reducer