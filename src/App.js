import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/productDetails/ProductDetail';
import Home from './components/home/Home';
import TopBar from './components/topBar/TopBar';
import Cart from './components/cart/Cart';
import Payment from './components/payment/Payment';
function App() {
  return (
        <BrowserRouter>
        <TopBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/products/:id' element={<ProductDetail/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/payment' element={<Payment/>}/>
        
        </Routes>
      </BrowserRouter>
  );
}

export default App;

