import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logout, login, refreshUser, register } from "./operations";

const initialState = {
  user: {
    name: "null",
    email: "null",
  },
  token: "null",
  isLoggedIn: false,
  isRefresh: false,
  error: false,
};

const sliсe = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(refreshUser.pending, (state) => {
        state.isRefresh = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(refreshUser.rejected, () => initialState)
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logout.pending,
          refreshUser.pending
        ),
        (state) => {
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(register.rejected, login.rejected, logout.rejected),
        (state) => {
          state.error = true;
        }
      )
      .addMatcher(
        isAnyOf(
          register.fulfilled,
          login.fulfilled,
          logout.fulfilled,
          refreshUser.fulfilled
        ),
        (state) => {
          state.error = false;
        }
      );
  },
});

export const authReducer = sliсe.reducer;
