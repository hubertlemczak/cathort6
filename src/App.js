import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const App = () => (
  <div className="App-container">
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  </div>
);

export default App;
