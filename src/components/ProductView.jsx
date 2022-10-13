import { useLocation } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { ReactComponent as HeartSVG } from '../assets/heart.svg';
import Button from './Button';

import {
  StyledProductViewDetails,
  StyledProductViewContainer,
  StyledProductViewButtons,
  StyledProductViewSelect,
} from './styles/ProductView.styled';
import { useWishList } from '../context/WishListContext';

export const ProductView = () => {
  const { increaseItemQuantity } = useShoppingCart();
  const { addToWishList } = useWishList();
  const location = useLocation();
  console.log(location);
  const product = location.state.product;
  const { id, name, price, imageUrl } = product;

  return (
    <StyledProductViewContainer>
      <img src={imageUrl} alt={`${name}`} style={{ cursor: 'pointer' }} />
      <StyledProductViewDetails>
        <div>
          <p>{name}</p>
          <p>£{price}</p>
        </div>
        <p>Model: Cute black cat</p>
        <p>Red hat with design and white pom pom</p>
        <StyledProductViewSelect>
          <option value="">XS</option>
          <option value="">S</option>
          <option value="">M</option>
          <option value="">L</option>
          <option value="">XL</option>
        </StyledProductViewSelect>
        <StyledProductViewButtons>
          <Button buttonType="black" onClick={() => increaseItemQuantity(id)}>
            Add to card
          </Button>
          <div>
            <HeartSVG onClick={() => addToWishList(id)} />
          </div>
        </StyledProductViewButtons>
      </StyledProductViewDetails>
    </StyledProductViewContainer>
  );
};
