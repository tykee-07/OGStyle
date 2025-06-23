// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import tabReducer from './tabSlice';
import cartReducer from './cartSlice';
import filterReducer from './filterSlice';
import searchReducer from './searchSlice';
export const myStore = configureStore({
  reducer: {
    product: productReducer,
    tab: tabReducer,
    cart: cartReducer,
    filters: filterReducer,
    search: searchReducer,
  }
})

export default myStore;
