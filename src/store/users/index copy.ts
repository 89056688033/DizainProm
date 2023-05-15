import { createSlice } from '@reduxjs/toolkit';
import { getUserById, getUserList } from '../users/effects';

interface IUserState {
  users: {
    data: any[];
    isSuccess: boolean;
    isLoading: boolean;
    isError: boolean;
  };
  currentUser: {
    data: any;
    isSuccess: boolean;
    isLoading: boolean;
    isError: boolean;
  };
}

const initialState: IUserState = {
  users: {
    data: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
  },
  currentUser: {
    data: null,
    isSuccess: false,
    isLoading: false,
    isError: false,
  },
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserList.pending, (state) => {
      return {
        ...state,
        users: { ...state.users, isLoading: true, isError: false, isSuccess: false },
      };
    });
    builder.addCase(getUserList.fulfilled, (state, { payload }) => {
      return {
        ...state,
        users: { ...state.users, isLoading: false, isError: false, isSuccess: true, data: payload },
      };
    });
    builder.addCase(getUserList.rejected, (state) => {
      return {
        ...state,
        users: { isLoading: false, isError: true, isSuccess: false, data: [] },
      };
    });
    // GET User BY ID
    builder.addCase(getUserById.pending, (state) => {
      return {
        ...state,
        currentUser: { ...state.currentUser, isLoading: true, isError: false, isSuccess: false },
      };
    });
    builder.addCase(getUserById.fulfilled, (state, { payload }) => {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          isLoading: false,
          isError: false,
          isSuccess: true,
          data: payload,
        },
      };
    });
    builder.addCase(getUserById.rejected, (state) => {
      return {
        ...state,
        currentUser: { isLoading: false, isError: true, isSuccess: false, data: null },
      };
    });
  },
});

export const { reducer: usersDataReducer, name: usersDataNameReducer } = slice;
