import React from "react";
import "./styles/globals/globals.scss";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NoPage from "./pages/NoPage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductSingle from "./pages/ProductSingle";
import LoginSignup from "./pages/LoginSignup";
import { useState, useEffect } from "react";

function RouterComponent() {
  const pathLocation = window.location.pathname;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
  }, [pathLocation]);

  return (
    <div>
      {loading ? <p>Loading.......</p> : null}
      <BrowserRouter>
        {pathLocation === "/auth" ? null : <Navbar />}
        <Routes>
          <Route path="/auth" element={<LoginSignup />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/product-single" element={<ProductSingle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterComponent;
