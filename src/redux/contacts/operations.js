import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi, setAutchHeaderNew } from "../auth/operations";


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {
  const token = thunkApi.getState().auth.token;
  setAutchHeaderNew(token);
  try {
    const { data } = await goitApi.get("/contacts");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addUserContacts = createAsyncThunk(
  "contacts/addUserContacts",
  async (newUserContacts, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    setAutchHeaderNew(token);
    try {
      const { data } = await goitApi.post("/contacts", newUserContacts);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteUserContacts = createAsyncThunk(
  "contacts/deleteUserContacts",
  async (id, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    setAutchHeaderNew(token);
    try {
      const { data } = await goitApi.post(`/contacts/${id}`);
      return data.id
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateUserContacts = createAsyncThunk(
  "contacts/updateUserContacts",
  async ({id, name, number}, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    setAutchHeaderNew(token);
    try {
      const { data } = await goitApi.post(`/contacts/${id}`, {name, number});
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
