import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    prepare({ name, number }) {
      return {
        payload: {
          id: nanoid(),
          name,
          number,
        },
      };
    },
    deleteContact: (state, { payload }) => {
      state.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsSliceReducer = contactsSlice.reducer;
