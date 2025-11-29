import { JSX } from 'react';
import { Product } from '@/_02_entities/product/model/product.schema';
import { ProductCreateBtn } from '@/_03_features/product-create-btn/product-create-btn';
import { SearchBar } from '@/_03_features/search-bar/ui/search-bar';
import { ProductList } from '@/_04_widgets/product-list/product-list';

export default async function ProductsPage(): Promise<JSX.Element> {
const url = process.env.API_URL!;
  let products: Product[] = [];

  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      console.error("Fetch failed:", res.status, await res.text());
      throw new Error("Failed to load products");
    }

    products = await res.json();
  } catch (e) {
    console.error("SSR fetch error:", e);
    products = [];
  }

  return (
    <>
      <ProductCreateBtn />
      <SearchBar />
      <ProductList initialState={products} />
    </>
  );
}
