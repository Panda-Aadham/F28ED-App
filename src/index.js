import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Start from './pages/start/Start.tsx';
import Home from './pages/home/Home.tsx';
import Category from './pages/category/Category.tsx';
import Item from './pages/item/Item.tsx';
import Cart from './pages/cart/Cart.tsx';
import End from './pages/end/End.tsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/category/:categoryName/:itemName" element={<Item />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/end" element={<End />} />
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
