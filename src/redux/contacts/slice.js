import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addUserContacts, deleteUserContacts, fetchContacts, updateUserContacts } from "./operations";
const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(addUserContacts.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteUserContacts.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter((item) => item.id !== action.payload);
      })
      .addCase(updateUserContacts.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.map((item) =>
          item.id !== action.payload
            ? { ...item, name: action.payload.name, number: action.payload.number }
            : item
        );
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addUserContacts.pending,
          deleteUserContacts.pending,
          updateUserContacts.pending
        ),
        (state) => {
          state.contacts.loading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addUserContacts.rejected,
          deleteUserContacts.rejected,
          updateUserContacts.rejected
        ),
        (state, action) => {
          state.contacts.loading = false;
          state.contacts.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addUserContacts.fulfilled,
          deleteUserContacts.fulfilled,
          updateUserContacts.fulfilled
        ),
        (state) => {
          state.contacts.loading = false;
        }
      );
  },
});

export const contactReducer = slice.reducer;
