import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name : "nav",
    initialState:{
        isSideBarOpen:false
    },
    reducers:{
        toggleSideBar :(state)=>{
            state.isSideBarOpen =  !state.isSideBarOpen
        },
        closeMenu:(state) =>{
            state.isSideBarOpen =true
        } 
    }
})

export const {toggleSideBar ,closeMenu} = navSlice.actions 
export default navSlice.reducer