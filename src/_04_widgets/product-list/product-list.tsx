'use client';

import Grid from '@mui/material/Grid';
import { JSX, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/_01_shared/store/hooks';
import { setProducts } from '@/_02_entities/product/model/product.slice';
import { ProductCardListItem } from '@/_04_widgets/product-card-list-item/product-card-list-item';

export const ProductList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);
  const query = useAppSelector((s) => s.search.query)
    .trim()
    .toLowerCase();
  const showFavorites = useAppSelector((s) => s.search.showFavorites);
  const likedIds = useAppSelector((s) => s.products.liked);

  const filtered = products
    .filter((p) => {
      if (showFavorites && !likedIds.includes(p.id)) {
        return false;
      }

      const titleMatch = p.title.toLowerCase().includes(query);
      const descMatch = p.description.toLowerCase().includes(query);

      return titleMatch || descMatch;
    })
    .sort((a, b) => {
      const aMatch = a.title.toLowerCase().includes(query);
      const bMatch = b.title.toLowerCase().includes(query);
      return aMatch === bMatch ? 0 : aMatch ? -1 : 1;
    });

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL);
      const data = await res.json();

      dispatch(setProducts(data));
    };

    if (products.length === 0) {
      fetchProducts();
    }
  }, [products.length, dispatch]);

  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {filtered.map(
        (product): JSX.Element => (
          <Grid key={product.id} sx={{ display: 'flex' }} size={{ xs: 12, sm: 6, lg: 3 }}>
            <ProductCardListItem product={product} />
          </Grid>
        ),
      )}
    </Grid>
  );
};
