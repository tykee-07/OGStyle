import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  min: 1000,
  max: 7000,
  brands: [],
  categories: [],
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      const { min, max, brands, categories } = action.payload;
      state.min = min;
      state.max = max;
      state.brands = brands;
      state.categories = categories;
    },
    resetFilters: () => initialState,
  },
});

export const { setFilters, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
