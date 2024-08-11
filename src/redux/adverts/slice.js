import { createSlice } from '@reduxjs/toolkit';
import { advertsInitialState } from '../../constants.js';
import { fetchAdverts, fetchMoreAdverts } from './operations.js';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,
  selectors: {
    selectCampers: state => state.campers,
    selectFavorites: state => state.favorites,
    selectPage: state => state.page,
    selectIsLoading: state => state.isLoading,
    selectError: state => state.error,
  },
  reducers: {
    toggleFavorites: (state, action) => {
      const isFavorite = state.favorites.some(
        favorite => favorite._id === action.payload._id
      );

      if (!isFavorite) {
        state.favorites.push(action.payload);
      } else {
        state.favorites = state.favorites.filter(
          favorite => favorite._id !== action.payload._id
        );
      }
    },
    resetPage: state => {
      state.page = 2;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campers = action.payload;
      })
      .addCase(fetchAdverts.rejected, handleRejected)

      .addCase(fetchMoreAdverts.pending, handlePending)
      .addCase(fetchMoreAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campers = [...state.campers, ...action.payload];
        state.page += 1;
      })
      .addCase(fetchMoreAdverts.rejected, handleRejected);
  },
});

export const selectIsFavorite = camper => state =>
  state.adverts.favorites.some(favorite => favorite._id === camper._id);
export const {
  selectCampers,
  selectFavorites,
  selectIsLoading,
  selectError,
  selectPage,
} = advertsSlice.selectors;
export const { toggleFavorites, resetPage } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
