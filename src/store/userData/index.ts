import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IUserData {
  email: string;
  token: string;
}

const initialState = {
  email: '',
  token: '',
};

const slice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData(state, { type, payload }: PayloadAction<IUserData>) {
      console.log(type);
      return { ...state, ...payload };
    },
    resetUserData() {
      return { ...initialState };
    }, // обнуляет значения initialState пусто
  },
});

export const { reducer: userDataReducer, name: userDataNameReducer, actions } = slice;
export const { setUserData, resetUserData } = actions;
