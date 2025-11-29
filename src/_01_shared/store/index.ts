import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '@/_02_entities/product/model/product.slice';
import { searchReducer } from '@/_03_features/search-bar/model/search.slice';

export function makeStore() {
  return configureStore({
    reducer: {
      products: productsReducer,
      search: searchReducer,
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
