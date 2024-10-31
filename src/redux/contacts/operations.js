import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {
  try {
    const { data } = await axios.get("/contacts");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addUserContacts = createAsyncThunk(
  "contacts/addUserContacts",
  async (newUserContacts, thunkApi) => {
 
    try {
      const { data } = await axios.post("/contacts", newUserContacts);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteUserContacts = createAsyncThunk(
  "contacts/deleteUserContacts",
  async (id, thunkApi) => {

    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data.id
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateUserContacts = createAsyncThunk(
  "contacts/updateUserContacts",
  async ({id, name, number}, thunkApi) => {

    try {
      const { data } = await axios.patch(`/contacts/${id}`, {name, number});
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
//   try {
//     await axios.post("/users/logout");
//     clearAuthHeader();
//   } catch (error) {
//     return thunkApi.rejectWithValue(error.message);
//   }
// });
