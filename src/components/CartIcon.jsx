import { ReactComponent as CartSVG } from '../assets/shopping-bag.svg';
import { useShoppingCart } from '../context/ShoppingCartContext';

import { StyledCartIcon } from './styles/CartIcon.styled';

export const CartIcon = () => {
  const { openCart, getCartSize } = useShoppingCart();
  return (
    <StyledCartIcon onClick={openCart}>
      <CartSVG className="shopping-icon" />
      <span>{getCartSize()}</span>
    </StyledCartIcon>
  );
};
