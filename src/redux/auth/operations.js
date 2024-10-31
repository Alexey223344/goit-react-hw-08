import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL='https://connections-api.goit.global'


export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

export const register = createAsyncThunk("auth/register", async (credentials, thunkApi) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    setAuthHeader(data.token)
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.responce?.data || error.message);
  }
});

export const login = createAsyncThunk("auth/login", async (loginUsers, thunkApi) => {
  try {
    const { data } = await axios.post("/users/login", loginUsers);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  const token = thunkApi.getState().auth.token
  setAuthHeader(token)
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});



export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkApi) => {

  const token = thunkApi.getState().auth.token;
  if (!token) {
    return thunkApi.rejectWithValue("not found your token~!");
  }
  setAuthHeader(token);
  try {
    const { data } = await axios.get("/users/current");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
    // return thunkApi.rejectWithValue (error.responce?.data || error.message);
  }
});
