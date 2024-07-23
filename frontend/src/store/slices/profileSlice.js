import { createSlice } from "@reduxjs/toolkit";
const profileSlice = createSlice({
  name: "profile",
  initialState: { isLogin: false, isNavBtnClicked: false },
  reducers: {
    setIsLogin(state, action) {
      state.isLogin = action.payload;
    },
    setIsNavBtnClicked(state, action) {
      state.isNavBtnClicked = action.payload;
    },
  },
});

export const { setIsLogin, setIsNavBtnClicked } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
