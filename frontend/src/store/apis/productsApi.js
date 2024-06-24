import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/products",
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query({
        query: (shopQuery) => {
          const params = {
            category: shopQuery.category,
          };

          // Conditionally add the sort_by parameter
          if (
            shopQuery.sort_by === "low_to_high" ||
            shopQuery.sort_by === "high_to_low"
          ) {
            params.sort_by = shopQuery.sort_by;
          }

          return {
            url: "",
            method: "GET",
            params: params,
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
