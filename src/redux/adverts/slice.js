import { createSlice } from '@reduxjs/toolkit';
import { advertsInitialState } from '../../constants.js';
import { fetchAdverts } from './operations.js';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,
  selectors: {
    selectCampers: state => state.campers,
    selectFavorites: state => state.favorites,
    selectIsLoading: state => state.isLoading,
    selectError: state => state.error,
  },
  reducers: {
    toggleFavorites: (state, action) => {
      const isFavorite = state.favorites.some(
        favorite => favorite.id === action.payload._id
      );

      if (!isFavorite) {
        state.favorites.push(action.payload);
      } else {
        state.favorites = state.favorites.filter(
          favorite => favorite._id !== action.payload._id
        );
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campers = action.payload;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { selectCampers, selectFavorites, selectIsLoading, selectError } =
  advertsSlice.selectors;
export const { toggleFavorites } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
