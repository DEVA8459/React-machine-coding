import {createSlice} from "@reduxjs/toolkit"

export const cartSlice =createSlice({
    name:"cart",
    initialState:{
        isVisible :false,
        items:[],
        totalAmount:0
    },
   
    reducers:{
        addItems :(state,action)=>{
            const {id:itemId ,price,defaultPrice} =action.payload
            const existingItems =state.items.find(item => item.id === itemId )
            if(existingItems){
                existingItems.quantity +=1
            }else{
                const newItem ={
                    ...action.payload,
                    quantity:1
                }
                
                state.items.push(newItem)
               
            }
            state.totalAmount += (price || defaultPrice)/100
        },
        deleteItems:(state ,action)=>{
            const {id:deleteId} = action.payload
            const {iems:existingItems} = state 
           



            state.items =existingItems.filter(({id})=> id != deleteId)
        },
        clearCart:(state)=>{
            state.items =[]

        },
        toggleCart: (state) => {
            state.isVisible = !state.isVisible
        }
    }
}
)
export const {addItems ,clearCart ,deleteItems,toggleCart}=cartSlice.actions

export default cartSlice.reducer;