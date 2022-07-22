import { useShoppingCart } from '../../context/ShoppingCartContext';
import Button from '../button/button.component';

import './ProductCard.scss';

export const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  const { increaseItemQuantity } = useShoppingCart();
  return (
    <div className="product-card-container">
      <img
        src={
          /*imageUrl*/ 'https://images.unsplash.com/photo-1566927467984-6332be7377d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        }
        alt={`${name}`}
      />
      <div className="footer">
        <span className="name">{/*name*/}name</span>
        <span className="price">{/*price*/}price</span>
      </div>
      <Button buttonType="inverted" onClick={() => increaseItemQuantity(id)}>
        Add to card
      </Button>
    </div>
  );
};
