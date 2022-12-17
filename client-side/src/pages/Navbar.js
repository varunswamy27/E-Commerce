import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/pages/Navbar.module.scss";
import ScrollPosition from "../Hooks/ScrollPosition";

const Navbar = () => {
  const scrollPosition = ScrollPosition();
  // console.log(scrollPosition);

  return (
    <nav className={scrollPosition > 0 ? styles.scroll : null}>
      <div
        className={
          scrollPosition > 0
            ? `${styles.shadow} container`
            : `${styles.navbar} container`
        }
      >
        <div className={styles.link_wrap}>
          <div className={styles.logo_box}>
            <p>LIQUOR <span>STORE</span></p>
          </div>
          <div className={styles.links}>
            <Link to="/">
              <p className={`${styles.link_name} text_xs`}>Home</p>
            </Link>
            <Link to="/about-us">
              <p className={`${styles.link_name} text_xs`}>About</p>
            </Link>
            <Link to="/product">
              <p className={`${styles.link_name} text_xs`}>Product</p>
            </Link>
            <Link to="/blog">
              <p className={`${styles.link_name} text_xs`}>Blog</p>
            </Link>
            <Link to="/contact">
              <p className={`${styles.link_name} text_xs`}>Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
