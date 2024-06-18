import { createSlice, nanoid } from "@reduxjs/toolkit";
import Contacts from "../contact.json"

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: Contacts,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const selectContacts = (state) => state.contacts.items;
export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;