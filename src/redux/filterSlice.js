import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: "",
  },
  reducers: {
    setFilter: (state, action) => {
 
        // всі ці три варіанти не працюють
      
      
// state.filter = action.payload;

// return {
//         ...state,
//         value: action.payload,
//       };



      return {
        ...state,
      state.value = action.payload,
      };
    },

    clearFilter() {
      return '';
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
