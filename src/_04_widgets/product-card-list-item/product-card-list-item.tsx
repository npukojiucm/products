'use client';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import { JSX } from 'react';
import { CategoryTag } from '@/_02_entities/product/ui/category-tag/category-tag';
import { useAppSelector } from '@/_01_shared/store/hooks';
import { CardTitle } from '@/_02_entities/product/ui/card-title/card-title';
import { CardContent } from '@/_02_entities/product/ui/card-content/card-content';
import { useRouter } from 'next/navigation';
import { Divider } from '@mui/material';
import { ProductRating } from '@/_02_entities/product/ui/rating/product-rating';
import { ProductActionBar } from '@/_04_widgets/product-action-bar/product-action-bar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Product } from '@/_02_entities/product/model/product.schema';

export const ProductCardListItem = ({ product }: { product: Product }): JSX.Element => {
  const router = useRouter();
  const query = useAppSelector((s) => s.search.query);

  return (
    <Card
      sx={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 1.5, padding: 2 }}
      onClick={() => router.push(`/products/${product.id}`)}
    >
      <ProductActionBar productID={product.id} />
      <CardMedia
        component="img"
        width="238"
        height="194"
        image={product?.image ?? ''}
        alt={product.title}
        sx={{
          objectFit: 'contain',
        }}
      />

      <Divider />

      <ProductRating ratingValue={product.rating.rate} />

      <CardContent description={product.description} query={query} variant={'list'}>
        <CardTitle title={product.title} query={query} variant={'list'} />
      </CardContent>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <Typography sx={{ fontWeight: 600, textTransform: 'uppercase' }}>Category:</Typography>
        <CategoryTag category={product.category} />
      </Box>
    </Card>
  );
};
