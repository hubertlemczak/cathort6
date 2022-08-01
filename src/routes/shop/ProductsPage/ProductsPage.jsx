import { ProductCard } from '../../../components/ProductCard';
import { useShop } from '../../../context/ShopContext';
import { useParams } from 'react-router-dom';

import { StyledProductsContainer } from '../styles/ProductsPage.styled';

const ProductsPage = () => {
  const { shopItems } = useShop();
  const { category } = useParams();
  return (
    <StyledProductsContainer className="products-container">
      {shopItems[category]?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductsContainer>
  );
};

export default ProductsPage;
