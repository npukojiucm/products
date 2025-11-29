import { JSX } from 'react';
import { ProductCardPage } from '@/_04_widgets/product-card-page/product-card-page';
import { BackBtn } from '@/_03_features/back-btn/back-btn';

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<JSX.Element> {
  const { id } = await params;

  return (
    <>
      <BackBtn />
      <ProductCardPage productID={Number(id)} />
    </>
  );
}
