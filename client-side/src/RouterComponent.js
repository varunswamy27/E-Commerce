import React, { useEffect } from "react";
import "./styles/globals/globals.scss";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NoPage from "./pages/NoPage";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductSingle from "./pages/ProductSingle";
import LoginSignup from "./pages/LoginSignup";
import { useState } from "react";
import Admin from "./pages/Admin";
import IsAuthorized from "./Hooks/IsAuthorized";
import Loader from './Hooks/Loader';


function RouterComponent() {

  const [pathLocation, setPathLocation] = useState(window.location.pathname);



  return (
    <div>
      <BrowserRouter>
        <IsAuthorized pathLocation={pathLocation} />
        {pathLocation === "/auth" ? null : <Navbar />}
        <Routes>
          <Route path="/auth" element={<LoginSignup />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/product-single/:id" element={<ProductSingle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default RouterComponent;
