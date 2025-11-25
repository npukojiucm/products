import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '@/entities/product/model/product.slice';

export function makeStore() {
  return configureStore({
    reducer: {
      products: productsReducer,
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
