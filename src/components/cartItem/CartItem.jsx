import { ReactComponent as TrashSVG } from '../../assets/trash.svg';
import { ReactComponent as HeartSVG } from '../../assets/heart.svg';
import { useShop } from '../../context/ShopContext';
import { useShoppingCart } from '../../context/ShoppingCartContext';

import './CartItem.scss';
import { useState } from 'react';
import { useWishList } from '../../context/WishListContext';

export const CartItem = ({ item: { id, quantity } }) => {
  const [remove, setRemove] = useState(false);
  const { findItemInStore } = useShop();
  const { removeItemFromCart } = useShoppingCart();
  const { addToWishList } = useWishList();
  const { name, imageUrl, price } = findItemInStore(id);

  const removeState = {
    remove: { class: 'fade-in-remove', msg: 'ITEM REMOVED' },
    add: { class: 'fade-in-add', msg: 'ITEM ADDED TO WISHLIST' },
  };
  return (
    <>
      {remove && (
        <span
          className={removeState[remove].class}
          onAnimationEnd={() => {
            removeItemFromCart(id);
            setRemove(null);
          }}
        >
          {removeState[remove].msg}
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
                if (addToWishList(id)) setRemove('add');
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
