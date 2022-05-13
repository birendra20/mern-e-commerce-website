import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Products from "./Components/Product/Products";
import Cart from "./Components/Cart/Cart";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/products" element={<Products />} />
      </Routes>
      <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route exact path="/products/:id" element={<Product />} />
      </Routes>
      <Routes>
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
