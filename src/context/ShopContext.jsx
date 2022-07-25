import { createContext, useContext, useState } from 'react';
import SHOP_ITEMS from '../data/shop-data.json';
import SHOP_CATEGORIES from '../data/shop-categories.json';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [shopItems] = useState(SHOP_ITEMS);
  const [shopCategories] = useState(SHOP_CATEGORIES);
  return (
    <ShopContext.Provider
      value={{
        shopItems,
        shopCategories,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
