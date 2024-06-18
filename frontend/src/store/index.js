import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { productsApi } from "./apis/productsApi";
import { productDetailApi } from "./apis/productDetailApi";
import { usersApi } from "./apis/usersApi";
import { cartApi } from "./apis/cartApi";
import { orderApi } from "./apis/orderApi";
import { cartReducer } from "./slices/cartSlice";
import { profileReducer } from "./slices/profileSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [productDetailApi.reducerPath]: productDetailApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    cartPrice: cartReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(productDetailApi.middleware)
      .concat(usersApi.middleware)
      .concat(cartApi.middleware)
      .concat(orderApi.middleware);
  },
});
setupListeners(store.dispatch);
