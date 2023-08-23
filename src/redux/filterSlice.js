import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    clearFilter() {
      return '';
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
