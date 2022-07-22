import { ProductCard } from '../../../components/productCard/ProductCard';
import { useShop } from '../../../context/ShopContext';

import './Hats.scss';

const Hats = () => {
  const { shopItems } = useShop();
  return (
    <div className="products-container">
      {shopItems.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Hats;
