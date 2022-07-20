import { createContext, useContext, useState } from 'react';
import SHOP_ITEMS from '../data/shop-data.json';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [shopItems, setShopItems] = useState(SHOP_ITEMS);
  return (
    <ShopContext.Provider
      value={{
        shopItems,
        setShopItems,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
