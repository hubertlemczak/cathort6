import Categories from '../../components/Categories';
import ProductsPage from './ProductsPage/ProductsPage';
import { Routes, Route } from 'react-router-dom';
import { ProductView } from '../../components/ProductView';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path="/:category" element={<ProductsPage />} />
      <Route path="/:category/:id" element={<ProductView />} />
    </Routes>
  );
};

export default Shop;
