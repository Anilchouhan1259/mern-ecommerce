import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderApi = createApi({
  reducerPath: "order",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
  }),
  endpoints(builder) {
    return {
      postOrder: builder.mutation({
        query: (products) => {
          return {
            url: "/orders",
            method: "POST",
            credentials: "include",
            body: products,
            headers: {
              "Content-type": "application/json;charset=UTF-8",
            },
          };
        },
      }),
      getOrder: builder.query({
        query: () => {
          return {
            url: "/orders",
            method: "GET",
            credentials: "include",
            headers: {
              "Content-type": "application/json;charset=UTF-8",
            },
          };
        },
      }),
    };
  },
});
export const { usePostOrderMutation, useGetOrderQuery } = orderApi;
export { orderApi };
