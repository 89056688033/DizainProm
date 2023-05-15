import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance } from '../../utils/network';

export const getUserList = createAsyncThunk('/user/list', async (_, { rejectWithValue }) => {
  try {
    const response = await networkInstance.get('/users');
    console.log(response);
    return response.data;
  } catch (e) {
    return rejectWithValue(e);
  }
});

export const getUserById = createAsyncThunk(
  '/user/byId',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await networkInstance.get(`/users/${id}`);
      console.log(response);
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
