"use client";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter(
        (item) => item.product.id !== action.payload.product.id
      );
    },

    decreaseCartItemAmount(state, action) {
      state.find((item) => item.product.id === action.payload).amount > 1
        ? (state.find((item) => item.product.id === action.payload).amount -= 1)
        : "";
    },

    increaseCartItemAmount(state, action) {
      state.find(
        (item) => item.product.id === action.payload.product.id
      ).amount += action.payload.amount;
    },

    clearCart(state) {
      state.length = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCartItemAmount,
  increaseCartItemAmount,
  clearCart,
} = cartSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
