import { configureStore } from '@reduxjs/toolkit';

import { filterSliceReducer } from './filterSlice';
import { contactsSliceReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filter: filterSliceReducer,
  },
});
