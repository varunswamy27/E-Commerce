import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/pages/Navbar.module.scss'

const Navbar = () => {
  return (
    <nav>
      <div className={`${styles.navbar} container`}>
        <div className={styles.link_wrap}>

          <Link to="/"><p>Home</p></Link>
          <Link to="/about-us"><p>About</p></Link>
          <Link to="/product"><p>Product</p></Link>
          <Link to="/blog"><p>Blog</p></Link>
          <Link to="/contact"><p>Contact</p></Link>
         

         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
