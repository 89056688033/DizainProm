import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance } from '../../utils/network';

export const getPostList = createAsyncThunk('/post/list', async (_, { rejectWithValue }) => {
  try {
    const response = await networkInstance.get('/posts');
    console.log(response);
    return response.data;
  } catch (e) {
    return rejectWithValue(e);
  }
});

export const getPostById = createAsyncThunk(
  '/post/byId',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await networkInstance.get(`/posts/${id}`);
      console.log(response);
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
