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
import Admin from "./pages/Admin";

function RouterComponent() {
  const pathLocation = window.location.pathname;
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [pathLocation]);

  // useEffect(() => {
  //   if (!localStorage.getItem('profile') && window.location.href.indexOf('auth') === -1) {
  //     setIsLogin(false)
  //     window.location.href = '/auth';
  //   }
  //   else {
  //     setIsLogin(true)
  //   }
  // }, [isLogin])

  useEffect(() => {
    if (!user && window.location.href.indexOf('auth') === -1) {
      setLoading(true)
      window.location.href = '/auth';
    }
    if (user && pathLocation === '/auth') {
      setLoading(true);
      window.location.href = '/';
    }
  }, []);

  useEffect(()=>{
    if (user?.data?.isAdmin === false && pathLocation === '/admin') {
      window.location.href = '/';
      console.log('Error')
    }
    else{
      console.log("You Are An Admin")
    }
  },[pathLocation])




  return (
    <div>
      {loading ? <p>Loading.......</p> : null}
      <BrowserRouter>
        {pathLocation === "/auth" ? null : <Navbar />}
        <Routes>
          <Route path="/auth" element={<LoginSignup />} />
          {/* {isLogin &&
            <> */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/product-single" element={<ProductSingle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NoPage />} />
          {/* </>
          } */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterComponent;
