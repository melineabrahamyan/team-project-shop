import { Routes, Route } from "react-router-dom";
import './App.css'
//pages
import Home from "./pages/home";
import About from "./pages/about";
import Cart from "./pages/cart";
import Category from "./pages/category";
import Wishlist from "./pages/wishlist";
// @ts-ignore
import Contact from "./pages/contact";
//components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Gender from "./pages/gender";
import SingleProduct from "./pages/singleProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:gender" element={<Gender />} />
        <Route path="/:gender/:category" element={<Category />} />
        <Route path="/:gender/:category/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
