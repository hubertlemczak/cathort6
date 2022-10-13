import { ReactComponent as CartSVG } from '../assets/shopping-bag.svg';
import { ReactComponent as HeartSVG } from '../assets/heart.svg';
import { ReactComponent as ExitSVG } from '../assets/cross.svg';
import Button from './Button.jsx';

import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from './CartItem';
import { useWishList } from '../context/WishListContext';
import { Empty } from './Empty';
import {
  StyledShoppingCart,
  StyledShoppingCartBg,
  StyledShoppingCartCheckout,
  StyledShoppingCartCloseTab,
  StyledShoppingCartContainer,
  StyledShoppingCartContents,
  StyledShoppingCartItems,
  StyledShoppingCartTab,
} from './styles/ShoppingCart.styled';
import { Flex } from './styles/Globals.styled';
import { useNavigate } from 'react-router-dom';

export const ShoppingCart = () => {
  const { fade, setFade, closeCart, cartItems, getCartSize, getCartTotal } =
    useShoppingCart();
  const {
    isWishListOpen,
    wishListItems,
    openWishList,
    closeWishList,
    getWishListSize,
  } = useWishList();

  const navigate = useNavigate();

  return (
    <StyledShoppingCart
      fade={fade}
      onAnimationEnd={e => {
        if (fade) {
          closeCart();
          closeWishList();
        }
      }}
    >
      <StyledShoppingCartBg
        onClick={() => setFade(true)}
      ></StyledShoppingCartBg>
      <StyledShoppingCartContainer>
        <Flex>
          <StyledShoppingCartTab
            isActive={!isWishListOpen}
            onClick={closeWishList}
          >
            <CartSVG style={{ width: 24, height: 24 }} />
            <span>SHOPPING CART [{getCartSize()}]</span>
          </StyledShoppingCartTab>
          <StyledShoppingCartTab
            isActive={isWishListOpen}
            onClick={openWishList}
          >
            <HeartSVG style={{ width: 24, height: 24 }} />
            <span>WISHLIST [{getWishListSize()}]</span>
          </StyledShoppingCartTab>
          <StyledShoppingCartCloseTab onClick={() => setFade(true)}>
            <ExitSVG style={{ width: 15, height: 15 }} />
          </StyledShoppingCartCloseTab>
        </Flex>
        <StyledShoppingCartContents>
          {(isWishListOpen ? getWishListSize() : getCartSize()) ? (
            <>
              <StyledShoppingCartItems>
                {(isWishListOpen ? wishListItems : cartItems).map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </StyledShoppingCartItems>
              {!isWishListOpen && (
                <StyledShoppingCartCheckout>
                  <p>Total: £{getCartTotal().toFixed(2)}</p>
                  <Button
                    buttonType="black"
                    onClick={() => {
                      closeCart();
                      navigate('/checkout');
                    }}
                  >
                    CHECKOUT
                  </Button>
                </StyledShoppingCartCheckout>
              )}
            </>
          ) : (
            <Empty value={isWishListOpen ? 'wishlist' : 'shopping cart'} />
          )}
        </StyledShoppingCartContents>
      </StyledShoppingCartContainer>
    </StyledShoppingCart>
  );
};
