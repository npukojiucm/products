import { JSX } from 'react';
import { ProductCreateBtn } from '@/_03_features/product-create-btn/product-create-btn';
import { SearchBar } from '@/_03_features/search-bar/ui/search-bar';
import { ProductList } from '@/_04_widgets/product-list/product-list';

export default function ProductsPage(): JSX.Element {
  return (
    <>
      <ProductCreateBtn />
      <SearchBar />
      <ProductList />
    </>
  );
}
