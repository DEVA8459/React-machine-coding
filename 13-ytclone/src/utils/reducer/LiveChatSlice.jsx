import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice =createSlice({
    name:"Livechat",
    initialState:{
        massage:[]
    },
    reducers:{
        addMassage :(state ,action)=>{
            state.massage.splice(30 ,1)
            // state.massage.push(action.payload)
            // we cn use above but ,to start from bottom 
            state.massage.unshift(action.payload)
            
        }
    }

})

export const {addMassage } =LiveChatSlice.actions 
export default LiveChatSlice.reducer