import { createSlice } from '@reduxjs/toolkit';
import { Product } from '@/entities/product/model/product.schema';

type InitialState = {
  items: Product[];
  liked: number[];
};

const initialState: InitialState = {
  items: [],
  liked: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
    toggleLike(state, action) {
      const id = action.payload;
      if (state.liked.includes(id)) {
        state.liked = state.liked.filter((v) => v !== id);
      } else {
        state.liked.push(id);
      }
    },
  },
});

export const { setProducts, toggleLike } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
