import { createContext, useContext, useState } from 'react';

const WishList = createContext();

export const useWishList = () => useContext(WishList);

export const WishListProvider = ({ children }) => {
  const [wishListItems, setWishListItems] = useState([]);
  const [isWishListOpen, setIsWishListOpen] = useState(false);

  const openWishList = () => setIsWishListOpen(true);
  const closeWishList = () => setIsWishListOpen(false);

  const addToWishList = id => {
    if (itemIsInWishList(id)) {
      alert('Item already in Wish List :)');
      return false;
    } else {
      setWishListItems([...wishListItems, { id }]);
      return true;
    }
  };

  const removeFromWishList = id =>
    setWishListItems(wishListItems.filter(item => item.id !== id));

  const getWishListSize = () => wishListItems.length;

  const itemIsInWishList = id => wishListItems.find(item => item.id === id);

  return (
    <WishList.Provider
      value={{
        wishListItems,
        setWishListItems,
        addToWishList,
        removeFromWishList,
        getWishListSize,
        isWishListOpen,
        openWishList,
        closeWishList,
      }}
    >
      {children}
    </WishList.Provider>
  );
};
