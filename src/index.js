import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';
import { UserProvider } from './context/UserContext';
import { ShopProvider } from './context/ShopContext';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ShopProvider>
          <ShoppingCartProvider>
            <App />
          </ShoppingCartProvider>
        </ShopProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
