import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import ShopContextProvider from './context/Shop-context';
 

function App() {
  return (
    <div>
      <ShopContextProvider >
        
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart'element={<Cart />} />
        </Routes>
        
      </ShopContextProvider>
    </div>
  );
}

export default App;
