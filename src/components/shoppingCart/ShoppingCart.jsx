import { ReactComponent as CartSVG } from '../../assets/shopping-bag.svg';
import { ReactComponent as HeartSVG } from '../../assets/heart.svg';
import { ReactComponent as ExitSVG } from '../../assets/cross.svg';
import Button from '../button/button.component.jsx';

import './ShoppingCart.scss';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { CartItem } from '../cartItem/CartItem';

export const ShoppingCart = () => {
  const { fadeOut, setFadeOut, closeCart, cartItems, getCartSize } =
    useShoppingCart();

  return (
    <div
      className={`shopping-cart ${fadeOut ? 'fade-out' : ''}`}
      onAnimationEnd={(e) => {
        if (e.animationName === 'fade-out') closeCart();
      }}
    >
      <div className="shopping-cart-bg" onClick={() => setFadeOut(true)}></div>
      <div className="shopping-cart-container">
        <div className="shopping-cart-tabs">
          <button className="shopping-cart-tab shopping-cart-tab1 active">
            <CartSVG style={{ width: 24, height: 24 }} />
            <span>SHOPPING CART [{getCartSize()}]</span>
          </button>
          <button className="shopping-cart-tab shopping-wishlist-tab">
            <HeartSVG style={{ width: 24, height: 24 }} />
            <span>WISHLIST [0]</span>
          </button>
          <button
            className="shopping-cart-tab shopping-cart-close"
            onClick={() => setFadeOut(true)}
          >
            <ExitSVG style={{ width: 15, height: 15 }} />
          </button>
        </div>
        <div className="shopping-cart-contents">
          <ul className="shopping-cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <div className="checkout-btn">
            <Button buttonType={'inverted'}>CHECKOUT</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
