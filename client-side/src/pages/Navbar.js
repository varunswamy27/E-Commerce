import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/pages/Navbar.module.scss";
import ScrollPosition from "../Hooks/ScrollPosition";
import { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../action/auth";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const scrollPosition = ScrollPosition();
  const [isActive, setActive] = useState(false);
  const [cartLength, setCartLength] = useState(JSON.parse(localStorage?.getItem('cartItems'))?.length || [])
  const [height, setHeight] = useState(0)
  const ref = useRef(null)
  const navRef = useRef();
  const btnRef = useRef();
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const cartState = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();



  useEffect(() => {
    // setHeight(ref.current.clientHeight);
    // document.documentElement.style.setProperty(
    //   "--nav_height",
    //   `${height}`
    // )
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

  useEffect(() => {
    setCartLength(JSON.parse(localStorage?.getItem('cartItems'))?.length);
  })

  console.log(user)

  return (
    <nav ref={ref} className={scrollPosition > 0 ? styles.scroll : null}>
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
              <p>SMART <span>STORE</span></p>
            </Link>
          </div>
          <div className={styles.links}>
            <Link to="/about-us">
              <p className={`${styles.link_name} text_xs`}>About</p>
            </Link>
            <Link to="/product">
              <p className={`${styles.link_name} text_xs`}>Product</p>
            </Link>
            <Link to="/contact">
              <p className={`${styles.link_name} text_xs`}>Contact</p>
            </Link>
            {user?.data?.profileImage ?
              <div className={styles.profilePic}>
                <img src={user?.data?.profileImage} alt="" />
              </div>
              :
              <p className={`${styles.userChar} text_xs`}>{`${user?.data?.firstName.charAt(0)}`}</p>
            }
            <Link to="/auth">
              <p className={`${styles.logout} text_xs`} onClick={() => dispatch(logout())}>{user ? 'Logout' : null}</p>
            </Link>
            <Link to="/cart">
              <p className={`${styles.link_name} text_xs`}>Cart <span className={styles.cartLength}>{cartLength === undefined ? `0` : cartLength}</span></p>
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
          <Link to="/about-us">
            <p onClick={() => { setActive(false) }} className={`${styles.link_name} text_sm`}>About</p>
          </Link>
          <Link to="/product">
            <p onClick={() => { setActive(false) }} className={`${styles.link_name} text_sm`}>Product</p>
          </Link>
          <Link to="/contact">
            <p onClick={() => { setActive(false) }} className={`${styles.link_name} text_sm`}>Contact</p>
          </Link>
          <p className={`${styles.link_name} text_xs`}>Logout</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
