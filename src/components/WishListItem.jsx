import { useState } from 'react';

import { ReactComponent as CartSVG } from '../assets/shopping-bag.svg';
import { ReactComponent as TrashSVG } from '../assets/trash.svg';
import { useShop } from '../context/ShopContext';
import { useShoppingCart } from '../context/ShoppingCartContext';

import { useWishList } from '../context/WishListContext';

import {
  StyledCartFadeOut,
  StyledCartItem,
  StyledImage,
  StyledItemButtons,
  StyledItemPrice,
  StyledRightItem,
} from './styles/CartItem.styled';

import { removeState } from '../utils/vars';

export const WishListItem = ({ item: { id, quantity } }) => {
  const [remove, setRemove] = useState(null);
  const { findItemInStore } = useShop();
  const { increaseItemQuantity } = useShoppingCart();
  const { removeFromWishList } = useWishList();
  const { name, imageUrl, price } = findItemInStore(id);

  return (
    <>
      {remove && (
        <StyledCartFadeOut
          remove={removeState[remove].action}
          onAnimationEnd={() => {
            removeFromWishList(id);
            setRemove(null);
          }}
        >
          {removeState[remove].msg}
        </StyledCartFadeOut>
      )}
      <StyledCartItem remove={remove}>
        <div>
          <StyledImage src={imageUrl} alt={name} />
        </div>
        <StyledRightItem>
          <div>
            <StyledItemPrice>£{price.toFixed(2)}</StyledItemPrice>
            <p>{name}</p>
          </div>
          <StyledItemButtons>
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
          </StyledItemButtons>
        </StyledRightItem>
      </StyledCartItem>
    </>
  );
};
