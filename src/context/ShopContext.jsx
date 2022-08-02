import { createContext, useContext, useEffect, useState } from 'react';

import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
  getCategoryKeysDocument,
} from '../utils/firebase/firebase.utils';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [shopItems, setShopItems] = useState({});
  const [shopCategories, setShopCategories] = useState([]);

  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_CATEGORIES);
  // }, []);

  useEffect(() => {
    async function getShopItems() {
      const items = await getCategoriesAndDocuments();
      delete items.undefined;
      setShopItems(items);
    }
    getShopItems();
  }, []);

  useEffect(() => {
    async function getCategoryKeys() {
      const categories = await getCategoryKeysDocument();
      setShopCategories(categories.categoryNames);
    }
    getCategoryKeys();
  }, []);

  const findItemInStore = id => {
    let item;
    for (let category in shopItems) {
      if (!item) item = shopItems[category].find(i => i.id === id);
    }
    return item;
  };
  return (
    <ShopContext.Provider
      value={{
        shopItems,
        shopCategories,
        findItemInStore,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
