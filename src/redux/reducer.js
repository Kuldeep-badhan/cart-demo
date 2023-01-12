import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: [],
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find((i) => i.id === item.id);
      if (isItemExist) {
        console.log("item exist");
        state.cartItems.forEach((i) => {
          if (i.id === item.id) {
            i.quantity = i.quantity + 1;
          }
        });
      } else {
        state.cartItems.push(item);
      }
    },
    increment: (state, action) => {
      const productId = action.payload.id;
      state.cartItems.forEach((i) => {
        if (i.id === productId) {
          i.quantity += 1;
        }
      });
    },
    decrement: (state, action) => {
      const productId = action.payload.id;
      state.cartItems.forEach((i) => {
        if (i.id === productId && i.quantity > 1) {
          i.quantity -= 1;
        }
      });
    },
    deleteProduct: (state, action) => {
      const productId = action.payload;
      state.cartItems.forEach((i, index) => {
        if (i.id === productId) {
          state.cartItems.splice(index, 1);
          console.log(index);
        }
      });
    },
    calcPrice: (state) => {
      let totalSubtotal = 0;
      if (state.cartItems.length === 0) {
        state.subtotal = 0;
        state.tax = 0;
        state.total = 0;
        state.shipping = 0;
      }

      state.cartItems.forEach((i) => {
        totalSubtotal += i.price * i.quantity;
        state.subtotal = parseInt(totalSubtotal);
        state.tax = +(18*(state.subtotal/100).toFixed());
        state.shipping = state.subtotal>1000?0:200;
        state.total = state.subtotal + state.tax + state.shipping;
      });
    },
  }
);
