import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const Axios = axios.create({
  baseURL: 'https://66b4d2659f9169621ea47c6e.mockapi.io',
});

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchInit',
  async (_, { rejectWithValue }) => {
    try {
      const response = await Axios('/adverts?page=1&limit=4');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchMoreAdverts = createAsyncThunk(
  'adverts/fetchMore',
  async (page, { rejectWithValue }) => {
    try {
      const response = await Axios(`/adverts?page=${page}&limit=4`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
