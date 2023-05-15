import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../configureStore';

const getUsersState = (state: TState) => state.users;

export const getUserListSelector = createSelector(getUsersState, ({ users }) => users.data);
export const getUserListIsError = createSelector(getUsersState, ({ users }) => users.isError);
export const getUserListIsSuccess = createSelector(getUsersState, ({ users }) => users.isSuccess);
export const getUserListIsLoading = createSelector(getUsersState, ({ users }) => users.isLoading);

export const getUserByIdSelector = createSelector(
  getUsersState,
  ({ currentUser }) => currentUser.data,
);
export const getUserByIdIsError = createSelector(
  getUsersState,
  ({ currentUser }) => currentUser.isError,
);
export const getUserByIdIsSuccess = createSelector(
  getUsersState,
  ({ currentUser }) => currentUser.isSuccess,
);
export const getUserByIdIsLoading = createSelector(
  getUsersState,
  ({ currentUser }) => currentUser.isLoading,
);
