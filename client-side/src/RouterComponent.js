import React from 'react';
import "./styles/globals/globals.scss";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NoPage from "./pages/NoPage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductSingle from './pages/ProductSingle';
import LoginSignup from './pages/LoginSignup';
function RouterComponent() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product-single" element={<ProductSingle />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/auth" element={<LoginSignup />} />
                    <Route path="*" element={<NoPage />} />

                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default RouterComponent;