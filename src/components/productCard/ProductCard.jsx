import { useShoppingCart } from '../../context/ShoppingCartContext';
import Button from '../button/button.component';

import './ProductCard.scss';

export const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  const { increaseItemQuantity } = useShoppingCart();
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={() => increaseItemQuantity(id)}>
        Add to card
      </Button>
    </div>
  );
};
