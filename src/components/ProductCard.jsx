import { useShoppingCart } from '../context/ShoppingCartContext';
import Button from './Button';

import {
  StyledProductCardDetails,
  StyledProductContainer,
} from './styles/ProductCard.styled';

export const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  const { increaseItemQuantity } = useShoppingCart();
  return (
    <StyledProductContainer>
      <img src={imageUrl} alt={`${name}`} />
      <StyledProductCardDetails>
        <span>{name}</span>
        <span>{price}</span>
      </StyledProductCardDetails>
      <Button buttonType="black" onClick={() => increaseItemQuantity(id)}>
        Add to card
      </Button>
    </StyledProductContainer>
  );
};
