import { Route, Routes } from 'react-router-dom';
import Checkout from './checkout';
import GlobalContext from './context';
import Header from './header';
import Home from './home';

function App() {
  return (
    <GlobalContext>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </GlobalContext>
  );
}

export default App;
