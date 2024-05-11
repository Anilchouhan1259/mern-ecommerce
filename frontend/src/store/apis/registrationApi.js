import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const registartionApi = createApi({
  reducerPath: "registartion",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
  }),
  endpoints(builder) {
    return {
      login: builder.mutation({
        query: (loginDetail) => {
          return {
            url: "/login",
            method: "POST",
            credentials: "include",
            body: loginDetail,
            headers: {
              "Content-type": "application/json;charset=UTF-8",
            },
          };
        },
      }),
      signUp: builder.mutation({
        query: (signupDetail) => {
          return {
            url: "/signup",
            method: "POST",
            credentials: "include",
            body: signupDetail,
            headers: {
              "Content-type": "application/json;charset=UTF-8",
            },
          };
        },
      }),
    };
  },
});
export const { useLoginMutation, useSignUpMutation } = registartionApi;
export { registartionApi };
