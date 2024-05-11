import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartPrice",
  initialState: { cartPrice: [] },
  reducers: {
    setCartPrice(state, action) {
      state.cartPrice = action.payload;
    },
    decreaseQuantity(state, action) {
      const index = state.cartPrice.findIndex((obj) => {
        return obj.skuId === action.payload;
      });

      state.cartPrice[index].quantity = state.cartPrice[index].quantity - 1;
    },
    increaseQuantity(state, action) {
      const index = state.cartPrice.findIndex((obj) => {
        return obj.skuId === action.payload;
      });
      state.cartPrice[index].quantity = state.cartPrice[index].quantity + 1;
    },
  },
});

export const { setCartPrice, decreaseQuantity, increaseQuantity } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
