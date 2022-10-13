import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication';
import Shop from './routes/shop/Shop';
import { GlobalStyles, AppContainer } from './components/styles/Globals.styled';
import Checkout from './routes/checkout';

const App = () => (
  <>
    <GlobalStyles />
    <AppContainer>
      <Navigation />
      <Routes>
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/join" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </AppContainer>
  </>
);
export default App;
