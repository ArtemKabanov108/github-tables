import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET } from '../requests/requests';

export const getUser = createAsyncThunk(
  'github/users',
  async (searchRequest: string) => {
    const response = await GET(searchRequest);

    return response;
  },
);
