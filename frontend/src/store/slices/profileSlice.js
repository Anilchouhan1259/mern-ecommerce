import { createSlice } from "@reduxjs/toolkit";
const profileSlice = createSlice({
  name: "profile",
  initialState: { isLogin: false },
  reducers: {
    setIsLogin(state, action) {
      state.isLogin = action.payload;
    },
  },
});

export const { setIsLogin } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
