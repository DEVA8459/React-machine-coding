1. to install 
    1. npm i @reduxjs/toolkit react-redux

2. setup store 
```js
import {configureStore} from '@reduxjs/toolkit'
const store = configureStore({
    reducer: {
        
    } // add slice here
})

export default store
```

3. create slice 
    1. A "slice" manages a piece of the state. It contains the initial state, reducers, and actions.
```js
import {createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: 'counter',
    initialState:{value:0},
    reducers:{
        increment : (state) =>{
            state.value +=1 
        },
        decrement :(state)=>{
            state.value -= 1
        },
        incrementByValue : (state ,action) =>{
            state.value += action.payload
        }
    }
})

export const {increment , decrement , incrementByValue} =counterSlice.action

export default counterSlice.reducer
```

3. connecting the slice to store 
```js
import {configureStore} from '@reduxjs/toolkit'
import counterReducer from "./slice"

const store = configureStore({
    reducer: {
        counter :counterReducer
    } // add slice here
})

export default store

```
4. app.js modifications
```js
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {Provider} from "react-redux"
import store from "./store/store.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

```

5. using redux in component 
```js
import { useSelector,useDispatch } from "react-redux" 
import { incrementByValue ,increment ,decrement } from "../store/slice"
export const ReduxCounter =()=>{

    const count = useSelector ((state)=> state.counter.value)
    const dispatch = useDispatch();

    
    return <>
    <h1>hello Redux Counter</h1>
    <h1>{count}</h1>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <button onClick={()=>dispatch(incrementByValue(5))}>5+</button>
    </>
}
```
