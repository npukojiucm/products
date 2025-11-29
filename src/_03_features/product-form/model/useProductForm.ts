import React, { useState } from 'react';
import { z } from 'zod';
import { productFormSchema, ProductFormValues } from './product-form.schema';
import { addProduct, updateProduct } from '@/_02_entities/product/model/product.slice';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/_01_shared/store/hooks';

export const useProductForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [error, setError] = useState<Partial<Record<keyof ProductFormValues, string[]>>>({});

  const validateForm = (formData: FormData) => {
    const raw = Object.fromEntries(formData.entries());
    const parsed = productFormSchema.safeParse(raw);

    if (!parsed.success) {
      const flattened = z.flattenError(parsed.error);
      setError(flattened.fieldErrors);
      return null;
    }

    return {
      id: parsed.data.id,
      title: parsed.data.title,
      category: parsed.data.category,
      price: parsed.data.price,
      rating: {
        rate: parsed.data.rate,
        count: parsed.data.count,
      },
      description: parsed.data.description ?? '',
    };
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, productID?: number) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = validateForm(formData);

    if (!data) return;

    if (productID) {
      dispatch(updateProduct(data));
    } else {
      dispatch(addProduct(data));
    }

    router.push('/products');
  };

  return { error, handleSubmit };
};
