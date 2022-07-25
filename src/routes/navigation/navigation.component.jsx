import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Cathort6 } from '../../assets/cathort6.svg';
import { CartIcon } from '../../components/cartIcon/CartIcon';
import { ShoppingCart } from '../../components/shoppingCart/ShoppingCart';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { useUserContext } from '../../context/UserContext';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useUserContext();
  const { isCartOpen } = useShoppingCart();

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Cathort6 className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className="nav-link" to="/auth" onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <ShoppingCart />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
