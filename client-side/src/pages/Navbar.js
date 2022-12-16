import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/pages/Navbar.module.scss'

const Navbar = () => {
  return (
    <nav>
      <div className={`${styles.navbar} container`}>
        <div className={styles.link_wrap}>

          <Link to="/"><p className="text_sm">Home</p></Link>
          <Link to="/about-us"><p className="text_sm">About</p></Link>
          <Link to="/product"><p className="text_sm">Product</p></Link>
          <Link to="/blog"><p className="text_sm">Blog</p></Link>
          <Link to="/contact"><p className="text_sm">Contact</p></Link>
         

         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
