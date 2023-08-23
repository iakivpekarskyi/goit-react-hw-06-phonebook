import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    //якщо я роблю так, то він каже, що не можна міняти стейт напряму(хоча я думав, що тут можна використовувати inner)

    ////////////////////////////////////////

    // якщо робити имутабельно, то теж не працює :

    //     setFilter(state, { payload }) {
    //   return {
    //     ...state,
    //     filter: payload,
    //   };
    // }

    clearFilter() {
      return '';
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
