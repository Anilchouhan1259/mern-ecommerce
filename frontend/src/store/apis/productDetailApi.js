import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const productDetailApi = createApi({
  reducerPath: "productDetail",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/products",
  }),
  endpoints(builder) {
    return {
      fetchProductDetail: builder.query({
        query: (id) => {
          return {
            url: `/${id}`,
            params: {},
            method: "GET",
          };
        },
      }),
    };
  },
});
export const { useFetchProductDetailQuery } = productDetailApi;
export { productDetailApi };
