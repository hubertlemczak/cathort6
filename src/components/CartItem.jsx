import { ReactComponent as TrashSVG } from '../assets/trash.svg';
import { ReactComponent as HeartSVG } from '../assets/heart.svg';
import { useShop } from '../context/ShopContext';
import { useShoppingCart } from '../context/ShoppingCartContext';

import { useState } from 'react';
import { useWishList } from '../context/WishListContext';
import {
  StyledCartFadeOut,
  StyledCartItem,
  StyledImage,
  StyledItemButtons,
  StyledItemDetails,
  StyledItemPrice,
  StyledRightItem,
} from './styles/CartItem.styled';
import { removeState } from '../utils/vars';

export const CartItem = ({ item: { id, quantity } }) => {
  const [remove, setRemove] = useState(false);
  const { findItemInStore } = useShop();
  const { removeItemFromCart } = useShoppingCart();
  const { addToWishList } = useWishList();
  const { name, imageUrl, price } = findItemInStore(id);

  return (
    <>
      {remove && (
        <StyledCartFadeOut
          remove={removeState[remove].action}
          onAnimationEnd={() => {
            removeItemFromCart(id);
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
            <StyledItemDetails>
              <p>BLUE</p>
              <p>XL</p>
              <p>Qty: {quantity}</p>
            </StyledItemDetails>
          </div>
          <StyledItemButtons>
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
          </StyledItemButtons>
        </StyledRightItem>
      </StyledCartItem>
    </>
  );
};
