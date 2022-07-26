import { ReactComponent as TrashSVG } from '../../assets/trash.svg';
import { ReactComponent as HeartSVG } from '../../assets/heart.svg';
import { useShop } from '../../context/ShopContext';
import { useShoppingCart } from '../../context/ShoppingCartContext';

import './CartItem.scss';
import { useState } from 'react';
import { useWishList } from '../../context/WishListContext';

export const CartItem = ({ item: { id, quantity } }) => {
  const [remove, setRemove] = useState(false);
  const { shopItems } = useShop();
  const { removeItemFromCart } = useShoppingCart();
  const { addToWishList } = useWishList();
  const { name, imageUrl, price } = shopItems.find((i) => i.id === id);
  return (
    <>
      {remove === 'remove' && (
        <span
          className="fade-in-remove"
          onAnimationEnd={() => {
            removeItemFromCart(id);
            setRemove(null);
          }}
        >
          ITEM REMOVED
        </span>
      )}
      {remove === 'add' && (
        <span
          className="fade-in-add"
          onAnimationEnd={() => {
            removeItemFromCart(id);
            setRemove(null);
          }}
        >
          ITEM ADDED TO WISHLIST
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
            <HeartSVG
              className="item-love"
              onClick={() => {
                setRemove('add');
                addToWishList(id);
              }}
            />
            <TrashSVG
              className="item-delete"
              onClick={() => setRemove('remove')}
            />
          </div>
        </div>
      </li>
    </>
  );
};
