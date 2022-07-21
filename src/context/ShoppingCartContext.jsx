import { createContext, useContext, useEffect, useState } from 'react';

const ShoppingCart = createContext();

export const useShoppingCart = () => useContext(ShoppingCart);

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

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
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  return (
    <ShoppingCart.Provider
      value={{
        cartItems,
        setCartItems,
        isCartOpen,
        openCart,
        closeCart,
        increaseItemQuantity,
      }}
    >
      {children}
    </ShoppingCart.Provider>
  );
};
