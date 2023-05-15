import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IProduct {
  name: string;
  count: number;
  total?: number;
  value?: number;
  productName?: string;
  productValue?: number;
}

interface IProductState {
  data: IProduct[];
}

const initialState: IProductState = {
  data: [],
};

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, { payload }: PayloadAction<IProduct>) {
      return { ...state, data: [...state.data, payload] };
    },
  },
});

export const { reducer: productsDataReducer, name: productsDataNameReducer, actions } = slice;
export const { addProduct } = actions;
