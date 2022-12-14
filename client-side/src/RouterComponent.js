import React from 'react';
import "./styles/globals/globals.scss";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
// import NoPage from "./pages/NoPage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function RouterComponent() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/product" />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="*" element={<NoPage />} /> */}

                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default RouterComponent;