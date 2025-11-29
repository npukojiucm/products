import { JSX } from 'react';
import { ProductForm } from '@/_03_features/product-form/ui/product-form';
import { ProductEditorHeader } from '@/_04_widgets/product-editor-header/product-editor-header';

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<JSX.Element> {
  const { id } = await params;

  return (
    <>
      <ProductEditorHeader productID={Number(id)} />
      <ProductForm productID={Number(id)} />
    </>
  );
}
