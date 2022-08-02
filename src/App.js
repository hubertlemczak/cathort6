import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication';
import Shop from './routes/shop/Shop';
import { GlobalStyles, AppContainer } from './components/styles/Globals.styled';

const App = () => (
  <>
    <GlobalStyles />
    <Navigation />
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/join" element={<Authentication />} />
      </Routes>
    </AppContainer>
  </>
);
export default App;
