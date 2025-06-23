// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const savedCart = localStorage.getItem('cart');
const initialState = {
  items: savedCart ? JSON.parse(savedCart) : [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, size } = action.payload;
      const existingItem = state.items.find(i => i.id === id && i.size === size);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cart');
    },
    removeFromCart: (state, action) => {
  const { id, size } = action.payload;
  state.items = state.items.filter(i => !(i.id === id && i.size === size));
  localStorage.setItem('cart', JSON.stringify(state.items));
},
    incrementQuantity: (state, action) => {
      const { id, size } = action.payload;
      const item = state.items.find(i => i.id === id && i.size === size);
      if (item) item.quantity += 1;
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    decrementQuantity: (state, action) => {
      const { id, size } = action.payload;
      const item = state.items.find(i => i.id === id && i.size === size);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(i => !(i.id === id && i.size === size));
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
