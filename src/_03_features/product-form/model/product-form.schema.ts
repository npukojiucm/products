import { z } from 'zod';

export const productFormSchema = z.object({
  id: z
    .string()
    .transform((v) => Number(v))
    .optional(),

  title: z
    .string()
    .trim()
    .min(1, 'Title is required')
    .max(100, 'Title must be 100 characters or less'),

  category: z
    .string()
    .trim()
    .min(1, 'Category is required')
    .max(50, 'Category must be 50 characters or less'),

  price: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, 'Invalid price format')
    .transform((v) => Number(v)),

  count: z
    .string()
    .regex(/^\d+$/, 'Count must be a non-negative integer')
    .transform((v) => Number(v))
    .refine((v) => v >= 0, { message: 'Count must be >= 0' }),

  rate: z
    .string()
    .regex(/^\d+(\.\d+)?$/, 'Rate must be a valid number')
    .transform((v) => Number(v))
    .refine((v) => v >= 0, { message: 'Rate must be >= 0' }),

  description: z.string().optional(),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;
