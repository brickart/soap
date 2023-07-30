import * as React from 'react';
import { MainLayout } from '~/layouts/main.layout';

interface ProductListPageProps {}

export const ProductListPage: React.FC<ProductListPageProps> = () => {
  return (<>
    <MainLayout />
  </>);
}

export default ProductListPage;
