import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { productsApi } from "./apis/productsApi";
import { productDetailApi } from "./apis/productDetailApi";
import { registartionApi } from "./apis/registrationApi";
import { cartApi } from "./apis/cartApi";
import { cartReducer } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [productDetailApi.reducerPath]: productDetailApi.reducer,
    [registartionApi.reducerPath]: registartionApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    cartPrice: cartReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(productDetailApi.middleware)
      .concat(registartionApi.middleware)
      .concat(cartApi.middleware);
  },
});
setupListeners(store.dispatch);
