import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/Home.tsx';
import Category from './pages/category/Category.tsx';
import Item from './pages/item/Item.tsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/category/:categoryName/:itemName" element={<Item />} />
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
