import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/products",
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query({
        query: (category) => {
          return {
            url: `/${category}`,
            params: {},
            method: "GET",
          };
        },
      }),
      createProduct: builder.mutation({
        query: (product) => {
          return {
            url: "/",
            method: "POST",
            body: product,
            headers: {
              "Content-type": "application/json;charset=UTF-8",
            },
          };
        },
      }),
    };
  },
});
export const { useFetchProductsQuery, useCreateProductMutation } = productsApi;
export { productsApi };
