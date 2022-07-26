import { createContext, useContext, useState } from 'react';
import { useShop } from './ShopContext';

const ShoppingCart = createContext();

export const useShoppingCart = () => useContext(ShoppingCart);

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const { shopItems } = useShop();

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => {
    setFadeOut(false);
    setIsCartOpen(false);
  };

  const findItemInCart = (id) => cartItems.find((item) => item.id === id);

  const increaseItemQuantity = (id) => {
    if (findItemInCart(id)) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else setCartItems([...cartItems, { id, quantity: 1 }]);
  };

  const removeItemFromCart = (id) =>
    setCartItems(cartItems.filter((item) => item.id !== id));

  const getCartTotal = () => {
    cartItems.reduce((acc, cartItem) => {
      const item = shopItems.find((i) => i.id === cartItem.id);
      return acc + item.price * cartItem.quantity;
    }, 0);
  };

  const getCartSize = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <ShoppingCart.Provider
      value={{
        cartItems,
        setCartItems,
        isCartOpen,
        openCart,
        closeCart,
        increaseItemQuantity,
        removeItemFromCart,
        fadeOut,
        setFadeOut,
        getCartSize,
        getCartTotal,
      }}
    >
      {children}
    </ShoppingCart.Provider>
  );
};
