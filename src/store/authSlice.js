import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedin: false,
  },
  reducers: {
    // We can mutate the state because there's Immer working under the hood here
    login: (state) => (state.isLoggedin = true),
    logout: (state) => (state.isLoggedOut = true),
  },
});

export default authSlice;
