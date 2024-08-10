import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://66b4d2659f9169621ea47c6e.mockapi.io/adverts'
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
