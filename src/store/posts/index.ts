import { createSlice } from '@reduxjs/toolkit';
import { getPostById, getPostList } from './effects';

interface IPostsState {
  posts: {
    data: any[];
    isSuccess: boolean;
    isLoading: boolean;
    isError: boolean;
  };
  currentPost: {
    data: any;
    isSuccess: boolean;
    isLoading: boolean;
    isError: boolean;
  };
}

const initialState: IPostsState = {
  posts: {
    data: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
  },
  currentPost: {
    data: null,
    isSuccess: false,
    isLoading: false,
    isError: false,
  },
};

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostList.pending, (state) => {
      return {
        ...state,
        posts: { ...state.posts, isLoading: true, isError: false, isSuccess: false },
      };
    });
    builder.addCase(getPostList.fulfilled, (state, { payload }) => {
      return {
        ...state,
        posts: { ...state.posts, isLoading: false, isError: false, isSuccess: true, data: payload },
      };
    });
    builder.addCase(getPostList.rejected, (state) => {
      return {
        ...state,
        posts: { isLoading: false, isError: true, isSuccess: false, data: [] },
      };
    });
    // GET POST BY ID
    builder.addCase(getPostById.pending, (state) => {
      return {
        ...state,
        currentPost: { ...state.currentPost, isLoading: true, isError: false, isSuccess: false },
      };
    });
    builder.addCase(getPostById.fulfilled, (state, { payload }) => {
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          isLoading: false,
          isError: false,
          isSuccess: true,
          data: payload,
        },
      };
    });
    builder.addCase(getPostById.rejected, (state) => {
      return {
        ...state,
        currentPost: { isLoading: false, isError: true, isSuccess: false, data: null },
      };
    });
  },
});

export const { reducer: postsDataReducer, name: postsDataNameReducer } = slice;
