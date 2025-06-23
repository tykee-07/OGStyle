// redux/searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const savedResults = JSON.parse(localStorage.getItem('searchResults')) || [];

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: savedResults,
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.results = action.payload;
      // сохраняем в localStorage
      localStorage.setItem('searchResults', JSON.stringify(action.payload));
    },
  },
});

export const { setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
