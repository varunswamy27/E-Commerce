import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/pages/Navbar.module.scss'

const Navbar = () => {
  return (
    <nav>
      <div className={`${styles.navbar} container`}>
        <div className={styles.link_wrap}>

          <Link to="/home"><p>Home</p></Link>
          <Link to="/about-us"><p>About</p></Link>
          <p>Contact</p>
          <p>Products</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
