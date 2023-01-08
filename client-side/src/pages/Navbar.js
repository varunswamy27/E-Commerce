import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/pages/Navbar.module.scss";
import ScrollPosition from "../Hooks/ScrollPosition";
import { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';



const Navbar = () => {
  const scrollPosition = ScrollPosition();
  // console.log(scrollPosition);
  const [isActive, setActive] = useState(false);
  const navRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (btnRef.current.contains(event.target)) return;
      if (!navRef.current.contains(event.target)) {
        setActive(false)
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, [])


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
          <Link to="/">
            <p>LIQUOR <span>STORE</span></p>
            </Link>
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
            <button ref={btnRef} onClick={() => { setActive(!isActive) }} className={styles.hamburger}>{isActive ?
              <AiOutlineClose />
              :
              <RxHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>
      <div ref={navRef} className={isActive ? `${styles.active_hamburger} active` : styles.side_bar}>
        <div className={styles.side_nav}>
          <Link to="/">
            <p onClick={()=>{setActive(false)}} className={`${styles.link_name} text_sm`}>Home</p>
          </Link>
          <Link to="/about-us">
            <p onClick={()=>{setActive(false)}} className={`${styles.link_name} text_sm`}>About</p>
          </Link>
          <Link to="/product">
            <p onClick={()=>{setActive(false)}} className={`${styles.link_name} text_sm`}>Product</p>
          </Link>
          <Link to="/blog">
            <p onClick={()=>{setActive(false)}} className={`${styles.link_name} text_sm`}>Blog</p>
          </Link>
          <Link to="/contact">
            <p onClick={()=>{setActive(false)}} className={`${styles.link_name} text_sm`}>Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
