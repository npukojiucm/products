'use client';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import { JSX } from 'react';
import { CategoryTag } from '@/_02_entities/product/ui/category-tag/category-tag';
import { CardTitle } from '@/_02_entities/product/ui/card-title/card-title';
import { CardContent } from '@/_02_entities/product/ui/card-content/card-content';
import Box from '@mui/material/Box';
import { ProductRating } from '@/_02_entities/product/ui/rating/product-rating';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '@/_01_shared/store/hooks';

export const ProductCardPage = ({ productID }: { productID: number }): JSX.Element | null => {
  const product = useAppSelector((state) => state.products.items.find((p) => p.id === productID));

  if (!product) return null;

  return (
    <Card sx={{ p: 3, minHeight: '100%' }}>
      <CardMedia
        component="img"
        image={product?.image ?? ''}
        alt={product.title}
        sx={{
          maxHeight: 360,
          objectFit: 'contain',
          borderRadius: 1,
          mb: 3,
        }}
      />

      <CardTitle title={product.title} variant={'page'} />

      <Box sx={{ mt: 1, mb: 2 }}>
        <ProductRating ratingValue={product.rating.rate} />
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr',
          rowGap: 1.2,
          columnGap: 2,
          mb: 3,
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Price:
        </Typography>
        <Typography variant="body1">${product.price}</Typography>

        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Available:
        </Typography>
        <Typography variant="body1">{product.rating.count}</Typography>

        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Category:
        </Typography>
        <CategoryTag category={product.category} />
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'center',
          mb: 3,
        }}
      ></Box>

      <CardContent description={product.description} variant={'page'} />
    </Card>
  );
};
