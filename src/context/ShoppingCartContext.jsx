import { createContext, useContext, useState } from 'react';

const ShoppingCart = createContext();

export const useShoppingCart = () => useContext(ShoppingCart);

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCart = () => setCartIsOpen(true);
  const closeCart = () => setCartIsOpen(false);
  return (
    <ShoppingCart.Provider
      value={{
        cartItems,
        setCartItems,
        cartIsOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </ShoppingCart.Provider>
  );
};
