import { createSlice } from "@reduxjs/toolkit";

const searchTermSlice = createSlice({
    name:"restaurant" ,
    initialState:{
        restaurants:[],
        searchText :"",
        title: ''
    },
    reducers:{
        setRestaurent:(state ,action)=>{
            state.restaurants =action.payload.restaurent
            state.title=action.payload.title
        },
        setText :(state ,action)=>{
            state.searchText = action.payload
        }

    }
})

export const {setRestaurent,setText} = searchTermSlice.actions

export default searchTermSlice.reducer