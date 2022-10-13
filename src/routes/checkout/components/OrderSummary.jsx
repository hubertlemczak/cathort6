import { useShoppingCart } from '../../../context/ShoppingCartContext';
import { CartItem } from '../../../components/CartItem';
import { Empty } from '../../../components/Empty';
import {
  StyledShoppingCart,
  StyledShoppingCartContainer,
  StyledShoppingCartContents,
  StyledShoppingCartItems,
} from '../index.styled';

export const OrderSummary = () => {
  const { cartItems, getCartSize, getCartTotal } = useShoppingCart();

  return (
    <StyledShoppingCart>
      <StyledShoppingCartContainer>
        <StyledShoppingCartContents>
          {getCartSize() ? (
            <>
              <StyledShoppingCartItems>
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </StyledShoppingCartItems>
              <p>Total: £{getCartTotal().toFixed(2)}</p>
            </>
          ) : (
            <Empty value={'shopping cart'} />
          )}
        </StyledShoppingCartContents>
      </StyledShoppingCartContainer>
    </StyledShoppingCart>
  );
};

export default OrderSummary;
