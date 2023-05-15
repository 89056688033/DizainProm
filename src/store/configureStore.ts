import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userDataNameReducer, userDataReducer } from './userData';
import { productsDataNameReducer, productsDataReducer } from './products';
import { moduleApi } from './query';
import { postsDataNameReducer, postsDataReducer } from './posts';
import { usersDataNameReducer, usersDataReducer } from './users/index copy';
const rootReducer = combineReducers({
  [userDataNameReducer]: userDataReducer,
  [productsDataNameReducer]: productsDataReducer,
  [postsDataNameReducer]: postsDataReducer,
  [usersDataNameReducer]: usersDataReducer,
  [moduleApi.reducerPath]: moduleApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moduleApi.middleware),
  devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
