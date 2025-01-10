import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:"counter" ,
    initialState :{
        value:0
    },
    reducers:{
        inc :(state)=>{
            state.value +=1
        },
        dec:(state)=>{
            state.value-=1
        },
        incByVal:(state,action ) =>{
            state.value += action.payload
        }

    }
})

export const {inc,dec,incByVal} = counterSlice.actions

export default counterSlice.reducer

// story of counterReducer in store 
// when we make slice with createSlice it automatically generates the reducer  function 
//this is the reducer funtion we import in store