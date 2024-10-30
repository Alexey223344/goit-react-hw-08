import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const setAutchHeaderNew = (token) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk("auth/register", async (credentials, thunkApi) => {
  try {
    const { data } = await goitApi.post("/users/signup", credentials);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.responce?.data || error.message);
  }
});

export const login = createAsyncThunk("auth/login", async (loginUsers, thunkApi) => {
  try {
    const { data } = await goitApi.post("/users/login", loginUsers);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  const token = thunkApi.getState().auth.token;
  setAutchHeaderNew(token);
  try {
    const { data } = await goitApi.post("/users/logout");
    return data;
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
  const token = thunkApi.getState().auth.token;
  if (!token) {
    return thunkApi.rejectWithValue("not found your token~!");
  }
  setAutchHeaderNew(token);
  try {
    const { data } = await goitApi.get("/users/current");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
    // return thunkApi.rejectWithValue (error.responce?.data || error.message);
  }
});
