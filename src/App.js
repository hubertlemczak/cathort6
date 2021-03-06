import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/Shop';
import ProductsPage from './routes/shop/ProductsPage/ProductsPage';

const App = () => (
  <>
    <Navigation />
    <div className="App-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<ProductsPage />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </div>
  </>
);

export default App;
