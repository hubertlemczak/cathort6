import { ProductCard } from '../../../components/productCard/ProductCard';
import { useShop } from '../../../context/ShopContext';
import { useParams } from 'react-router-dom';

import './ProductsPage.scss';

const ProductsPage = () => {
  const { shopItems } = useShop();
  const { category } = useParams();
  return (
    <div className="products-container">
      {shopItems[category]?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
