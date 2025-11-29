import { JSX } from 'react';
import { Product } from '@/_02_entities/product/model/product.schema';
import { ProductCreateBtn } from '@/_03_features/product-create-btn/product-create-btn';
import { SearchBar } from '@/_03_features/search-bar/ui/search-bar';
import { ProductList } from '@/_04_widgets/product-list/product-list';

export default async function ProductsPage(): Promise<JSX.Element> {
    if (!process.env.API_URL) {
    throw new Error("API_URL environment variable is missing");
  }

  const products: Product[] = await fetch(process.env.API_URL, {
    cache: "no-store",      // << обязательное
    // next: { revalidate: 0 } // альтернативно
  }).then((res) => res.json());

  return (
    <>
      <ProductCreateBtn />
      <SearchBar />
      <ProductList initialState={products} />
    </>
  );
}
