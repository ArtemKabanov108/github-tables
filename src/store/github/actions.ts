import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET, GETExec } from '../requests/requests';

export const getUser = createAsyncThunk(
  'github/users',
  async (searchRequest: string) => {
    const response = await GET(searchRequest);

    return response;
  },
);

export const getUserRepos = createAsyncThunk(
  'github/repos',
  async (URL: string) => {
    const response = await GETExec(URL);

    return response;
  },
);


