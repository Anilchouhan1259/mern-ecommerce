import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const usersApi = createApi({
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
      logout: builder.mutation({
        query: () => {
          return {
            url: "/logout",
            method: "POST",
            credentials: "include",
            headers: {
              "Content-type": "application/json;charset=UTF-8",
            },
          };
        },
      }),
      userInfo: builder.query({
        query: () => {
          return {
            url: "/userInfo",
            method: "GET",
            credentials: "include",
          };
        },
      }),
      changeUserInfo: builder.mutation({
        query: (data) => {
          return {
            url: "/userInfo",
            method: "POST",
            body: data,
            credentials: "include",
            headers: {
              "Content-type": "application/json;charset=UTF-8",
            },
          };
        },
      }),
      getAddress: builder.query({
        query: () => {
          return {
            url: "/getAddress",
            method: "GET",
            credentials: "include",
            headers: {
              "Content-type": "application/json;charset=UTF-8",
            },
          };
        },
      }),
      postAddress: builder.mutation({
        query: (data) => {
          return {
            url: "/postAddress",
            method: "POST",
            body: data,
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
export const {
  useLoginMutation,
  useSignUpMutation,
  useLogoutMutation,
  useUserInfoQuery,
  useChangeUserInfoMutation,
  useGetAddressQuery,
  usePostAddressMutation,
} = usersApi;
export { usersApi };
