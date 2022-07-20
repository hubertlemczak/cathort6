import { ReactComponent as CartSVG } from '../../assets/shopping-bag.svg';
import { useShoppingCart } from '../../context/ShoppingCartContext';

import './CartIcon.scss';

export const CartIcon = () => {
  const { openCart } = useShoppingCart();
  return (
    <div className="cart-icon-container" onClick={openCart}>
      <CartSVG className="shopping-icon" style={{ transform: 'scale(1)' }} />
      <span className="item-count">10</span>
    </div>
  );
};
