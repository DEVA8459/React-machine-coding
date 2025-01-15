import { configureStore } from "@reduxjs/toolkit";
import searchTermReducer from "./SearchTermSlice";
import  cartReducer  from "./cartSlice";
const store = configureStore({
  reducer: {
    restaurant: searchTermReducer,
    cart: cartReducer,
  },
});
export default store;
