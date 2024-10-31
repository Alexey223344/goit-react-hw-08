import { createSelector } from "@reduxjs/toolkit";
import { selectActionFilters } from "../filters/selectors";
export const selectContacts = (state) => state.contacts.contacts.items;
export const selectIsLoading = (state) => state.contacts.contacts.loading;
export const selectError = (state) => state.contacts.contacts.error;
export const selectFilters = createSelector([selectContacts, selectActionFilters], (contacts, filter) => {
  return Array.isArray(contacts)
      ? contacts.filter(
          (contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase()) ||
            contact.number.includes(filter)
        )
      : [];
     
}
);
