import { ReactComponent as TrashSVG } from '../../assets/trash.svg';
import { ReactComponent as HeartSVG } from '../../assets/heart.svg';
import { useShop } from '../../context/ShopContext';
import { useShoppingCart } from '../../context/ShoppingCartContext';

import './CartItem.scss';
import { useState } from 'react';

export const CartItem = ({ item: { id, quantity } }) => {
  const [remove, setRemove] = useState(false);
  const { shopItems } = useShop();
  const { removeItemFromCart } = useShoppingCart();
  const { name, imageUrl, price } = shopItems.find((i) => i.id === id);
  return (
    <>
      {remove && (
        <span
          className="fade-in-removed"
          onAnimationEnd={() => {
            removeItemFromCart(id);
            setRemove(false);
          }}
        >
          ITEM REMOVED
        </span>
      )}
      <li className={`shopping-cart-item ${remove ? 'slide-right-fade' : ''}`}>
        <div className="item-img-container">
          <img className="item-img" src={imageUrl} alt={name} />
        </div>
        <div className="item-right">
          <div className="item-details">
            <p className="item-price">£{price.toFixed(2)}</p>
            <p className="item-name">{name}</p>
            <div className="item-details-more">
              <p className="item-type">BLUE</p>
              <p className="item-size">XL</p>
              <p className="item-quantity">Qty: {quantity}</p>
            </div>
          </div>
          <div className="item-buttons">
            <HeartSVG className="item-love" />
            <TrashSVG className="item-delete" onClick={() => setRemove(true)} />
          </div>
        </div>
      </li>
    </>
  );
};
