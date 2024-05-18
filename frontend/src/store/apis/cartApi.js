import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cartApi = createApi({
  reducerPath: "cart",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/cart",
  }),
  endpoints(builder) {
    return {
      addToCart: builder.mutation({
        query: (product) => {
          return {
            url: "/",
            method: "POST",
            credentials: "include",
            body: product,
            headers: {
              "Content-type": "application/json;charset=UTF-8",
            },
          };
        },
      }),
      getCart: builder.query({
        query: (id) => {
          return {
            url: `/`,
            method: "GET",
            credentials: "include",
          };
        },
      }),
    };
  },
});
export const { useAddToCartMutation, useGetCartQuery } = cartApi;
export { cartApi };
