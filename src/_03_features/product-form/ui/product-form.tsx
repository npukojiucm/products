'use client';

import React, { JSX } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAppSelector } from '@/_01_shared/store/hooks';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { useProductForm } from '@/_03_features/product-form/model/useProductForm';
import { useRouter } from 'next/navigation';

export const ProductForm = ({ productID }: { productID?: number }): JSX.Element => {
  const router = useRouter();

  const product = useAppSelector((state) =>
    state.products.items.find((product) => product.id === productID),
  );

  const { error, handleSubmit } = useProductForm();

  return (
    <Box
      component={'form'}
      onSubmit={(e) => handleSubmit(e, productID)}
      maxWidth={'sm'}
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignSelf: 'center',
        width: '100%',
        padding: 3,
        boxShadow: (theme) => theme.shadows[1],
      }}
    >
      {product && <input type={'hidden'} name={'id'} value={product.id} />}
      <input type={'hidden'} name={'rate'} value={product?.rating.rate ?? 0} />

      <Grid container spacing={2}>
        <Grid
          size={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            justifyContent: 'space-between',
          }}
        >
          <TextField
            required
            id={'outlined-required'}
            name={'title'}
            label={'Title'}
            defaultValue={product?.title}
            fullWidth
            error={!!error.title}
            helperText={error.title}
          />

          <TextField
            required
            id={'outlined-required'}
            name={'category'}
            label={'Category'}
            defaultValue={product?.category}
            fullWidth
            error={!!error.category}
            helperText={error.category}
          />

          <TextField
            required
            id={'outlined-required'}
            name={'price'}
            label={'Price'}
            defaultValue={product?.price}
            fullWidth
            error={!!error.price}
            helperText={error.price}
          />

          <TextField
            required
            id={'outlined-required'}
            name={'count'}
            label={'Count'}
            defaultValue={product?.rating.count}
            fullWidth
            error={!!error.count}
            helperText={error.count}
          />

          <TextField
            disabled
            id={'outlined-required'}
            label={'Rate'}
            defaultValue={product?.rating.rate ?? 0}
            fullWidth
            error={!!error.rate}
            helperText={error.rate}
          />
        </Grid>
        <Grid
          size={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          <Card sx={{ flex: 1, display: 'flex' }}>
            <CardMedia
              component="img"
              image={product?.image || '/placeholder.jpg'}
              sx={{
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </Card>

          <Button disabled variant="outlined" type="submit">
            Upload Image
          </Button>
        </Grid>
      </Grid>

      <TextField
        id={'standard-multiline-flexible'}
        label={'Description'}
        name={'description'}
        defaultValue={product?.description}
        multiline
        maxRows={4}
        variant={'standard'}
        error={!!error.description}
        helperText={error.description}
      />

      <Button variant="outlined" type={'submit'}>
        Save
      </Button>
      <Button variant="outlined" type={'button'} onClick={() => router.push('/products')}>
        Cancel
      </Button>
    </Box>
  );
};
