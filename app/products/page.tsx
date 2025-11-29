import { JSX } from 'react';
import { Product } from '@/_02_entities/product/model/product.schema';
import { ProductCreateBtn } from '@/_03_features/product-create-btn/product-create-btn';
import { SearchBar } from '@/_03_features/search-bar/ui/search-bar';
import { ProductList } from '@/_04_widgets/product-list/product-list';

export default async function ProductsPage(): Promise<JSX.Element> {
  const products: Product[] = await fetch(`${process.env.BASE_URL}/api/products`).then((res) =>
    res.json(),
  );

  return (
    <>
      <ProductCreateBtn />
      <SearchBar />
      <ProductList initialState={products} />
    </>
  );
}
