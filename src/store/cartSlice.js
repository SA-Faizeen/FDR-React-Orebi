import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id || item.name === newItem.name
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          ...newItem,
          id: newItem.id || newItem.name,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem && quantity >= 0) {
        const diff = quantity - existingItem.quantity;
        state.totalQuantity += diff;
        existingItem.quantity = quantity;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
