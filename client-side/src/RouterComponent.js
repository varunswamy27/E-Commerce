import React from 'react';
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NoPage from "./pages/NoPage";
import "./styles/globals/globals.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
function RouterComponent() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/product" />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default RouterComponent;