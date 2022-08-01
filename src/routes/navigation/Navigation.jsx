import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Cathort6 } from '../../assets/cathort6.svg';
import { CartIcon } from '../../components/CartIcon';
import { ShoppingCart } from '../../components/ShoppingCart';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { useUserContext } from '../../context/UserContext';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { StyledNav, StyledNavLinks } from './styles/Navigation.styled';

const Navigation = () => {
  const { currentUser } = useUserContext();
  const { isCartOpen } = useShoppingCart();

  return (
    <Fragment>
      <StyledNav>
        <Link to="/">
          <Cathort6 />
        </Link>
        <StyledNavLinks>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          {currentUser ? (
            <li>
              <Link to="/join" onClick={signOutUser}>
                SIGN OUT
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/join">SIGN IN</Link>
            </li>
          )}
          <li>
            <CartIcon />
          </li>
        </StyledNavLinks>
        {isCartOpen && <ShoppingCart />}
      </StyledNav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
