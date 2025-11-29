import { createSlice } from '@reduxjs/toolkit';

type SearchState = {
  query: string;
  showFavorites: boolean;
};

const initialState: SearchState = {
  query: '',
  showFavorites: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    toggleShowFavorites(state) {
      state.showFavorites = !state.showFavorites;
    },
  },
});

export const { setQuery, toggleShowFavorites } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
