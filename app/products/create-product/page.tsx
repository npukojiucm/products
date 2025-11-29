import { JSX } from 'react';
import { ProductForm } from '@/_03_features/product-form/ui/product-form';
import { ProductEditorHeader } from '@/_04_widgets/product-editor-header/product-editor-header';

export default function CreateProductPage(): JSX.Element {
  return (
    <>
      <ProductEditorHeader />
      <ProductForm />
    </>
  );
}
