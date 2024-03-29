import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459 - 12 - 56' },
    { id: 'id-2', name: 'Hermine Kline', number: '443 - 89 - 12' },
    { id: 'id-3', name: 'Eden Clements', number: '645 - 17 - 79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227 - 91 - 26 ' },
  ],
  reducers: {
    addContact: {
      prepare: newContact => {
        return {
          payload: { ...newContact, id: nanoid() },
        };
      },
      reducer: (state, { payload }) => {
        return [...state, payload];
      },
    },
    deleteContact: (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
