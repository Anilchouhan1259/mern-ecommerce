import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cartApi = createApi({
  reducerPath: "cart",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/cart",
  }),
  tagTypes: ["Cart"],
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
        query: () => {
          return {
            url: `/`,
            method: "GET",
            credentials: "include",
          };
        },
        providesTags: ["Cart"],
      }),
      changeQuantity: builder.mutation({
        query: (quantity) => {
          return {
            url: "/updateQuantity",
            method: "POST",
            credentials: "include",
            body: quantity,
            headers: {
              "Content-type": "application/json;charset=UTF-8",
            },
          };
        },
        invalidatesTags: ["Cart"],
      }),
    };
  },
});
export const {
  useAddToCartMutation,
  useGetCartQuery,
  useChangeQuantityMutation,
} = cartApi;
export { cartApi };
