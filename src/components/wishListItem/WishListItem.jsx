import { ReactComponent as CartSVG } from '../../assets/shopping-bag.svg';
import { ReactComponent as TrashSVG } from '../../assets/trash.svg';
import { useShop } from '../../context/ShopContext';
import { useShoppingCart } from '../../context/ShoppingCartContext';

import './WishListItem.scss';
import { useState } from 'react';
import { useWishList } from '../../context/WishListContext';

export const WishListItem = ({ item: { id, quantity } }) => {
  const [remove, setRemove] = useState(null);
  const { findItemInStore } = useShop();
  const { increaseItemQuantity } = useShoppingCart();
  const { removeFromWishList } = useWishList();
  const { name, imageUrl, price } = findItemInStore(id);

  return (
    <>
      {remove === 'remove' && (
        <span
          className="fade-in-remove"
          onAnimationEnd={() => {
            removeFromWishList(id);
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
            removeFromWishList(id);
            setRemove(null);
          }}
        >
          ITEM ADDED TO CART
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
          </div>
          <div className="item-buttons">
            <CartSVG
              className="item-cart"
              onClick={() => {
                increaseItemQuantity(id);
                setRemove('add');
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
