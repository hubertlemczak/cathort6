import { Link } from 'react-router-dom';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { useWishList } from '../../context/WishListContext';
import Button from '../button/button.component';
import './Empty.scss';

export const Empty = ({ value }) => {
  const { openWishList, closeWishList } = useWishList();
  const { closeCart } = useShoppingCart();
  return (
    <div className="empty-container">
      <h3>YOUR {value.toUpperCase()} IS EMPTY</h3>
      <p>
        Check your {value === 'wishlist' ? 'shopping cart' : 'wishlist'} or you
        can also check out all products
      </p>
      <div className="empty-button-container">
        <Button
          buttonType="inverted"
          onClick={value === 'wishlist' ? closeWishList : openWishList}
        >
          VIEW {value === 'wishlist' ? 'SHOPPING CART' : 'WISHLIST'}
        </Button>
        <Link to="/shop">
          <Button buttonType="black" onClick={closeCart}>
            VIEW ALL PRODUCTS
          </Button>
        </Link>
      </div>
    </div>
  );
};
