import { createSlice } from '@reduxjs/toolkit';
import { Product } from '@/_02_entities/product/model/product.schema';

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
    addProduct(state, action) {
      const maxId = state.items.reduce((max, p) => Math.max(max, p.id), 0);
      state.items.push({ id: maxId + 1, ...action.payload });
    },
    updateProduct(state, action) {
      const idx = state.items.findIndex((i) => i.id === action.payload.id);
      if (idx !== -1) {
        state.items[idx] = {
          ...state.items[idx],
          ...action.payload,
        };
      }
    },
    removeProduct(state, action) {
      state.items = state.items.filter((p) => p.id !== action.payload);
      state.liked = state.liked.filter((id) => id !== action.payload);
    },
  },
});

export const { setProducts, toggleLike, addProduct, updateProduct, removeProduct } =
  productsSlice.actions;
export const productsReducer = productsSlice.reducer;
