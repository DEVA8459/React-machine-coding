import {createSlice } from "@reduxjs/toolkit"
const userSlice = createSlice({
    name:"user",
    initialState :null,
    reducers:{
        addUser :(state ,action)=>{
            return action.payload
        },
        deleteUser :(state ,action)=>{
            action.null
        }

    }



})

export default userSlice.reducer
export const {addUser ,deleteUser} =userSlice.actions