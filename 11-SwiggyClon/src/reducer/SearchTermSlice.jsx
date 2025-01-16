import { createSlice } from "@reduxjs/toolkit";

const searchTermSlice = createSlice({
    name:"restaurant" ,
    initialState:{
        restro:[],
        searchText :"",
        title: ''
    },
    reducers:{
        setRestaurent:(state ,action)=>{
            state.restro =action.payload.data
            state.title=action.payload.tit
        },
        setText :(state ,action)=>{
            state.searchText = action.payload
        }

    }
})

export const {setRestaurent,setText} = searchTermSlice.actions

export default searchTermSlice.reducer