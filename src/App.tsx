import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

//pages
import Home from './pages/home';
import About from './pages/about';
import Cart from './pages/cart';
import Category from './pages/category';
import Wishlist from './pages/wishlist';

//components
import Navbar from './components/navbar';
import Footer from './components/footer';
import CategoryMen from './pages/categoryMen';
import CategoryWomen from './pages/categoryWomen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/mens" element={<CategoryMen />} />
        <Route path="/womens" element={<CategoryWomen />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
