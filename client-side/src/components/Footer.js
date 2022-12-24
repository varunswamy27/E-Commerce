import React from "react";
import styles from "../styles/components/Footer.module.scss";
import { FaGreaterThan } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`${styles.footer_main} section_spacing`}>
      <div className="container">
        <div className={styles.footer_wrap}>
          <div className={styles.foot_box}>
            <p className={`${styles.foot_logo} text_sm`}>
              LIQUOR <span>STORE</span>{" "}
            </p>
            <p className={`${styles.foot_desp} text_xs`}>
              Far far away, behind the word mountains, far from the countries.
            </p>
            <div className={styles.icon_wrap}>
              <div className={styles.social_icon}></div>
              <div className={styles.social_icon}></div>
              <div className={styles.social_icon}></div>
            </div>
          </div>
          <div className={styles.foot_box}>
            <p className={`${styles.foot_title} text_sm`}>My Accounts</p>
            <p className={`${styles.foot_links} text_xs`}>
              <FaGreaterThan className={styles.icon} />
              My Account
            </p>
            <p className={`${styles.foot_links} text_xs`}>
              <FaGreaterThan className={styles.icon} />
              My Account
            </p>
            <p className={`${styles.foot_links} text_xs`}>
              <FaGreaterThan className={styles.icon} />
              My Account
            </p>
            <p className={`${styles.foot_links} text_xs`}>
              <FaGreaterThan className={styles.icon} />
              My Account
            </p>
          </div>
          <div className={styles.foot_box}>
            <p className={`${styles.foot_title} text_sm`}>Information</p>
            <p className={`${styles.foot_links} text_xs`}>
              <FaGreaterThan className={styles.icon} />
              My Account
            </p>
            <p className={`${styles.foot_links} text_xs`}>
              <FaGreaterThan className={styles.icon} />
              My Account
            </p>
            <p className={`${styles.foot_links} text_xs`}>
              <FaGreaterThan className={styles.icon} />
              My Account
            </p>
            <p className={`${styles.foot_links} text_xs`}>
              <FaGreaterThan className={styles.icon} />
              My Account
            </p>
          </div>
          <div className={styles.foot_box}>
            <p className={`${styles.foot_title} text_sm`}>Quick Link</p>
            <p className={`${styles.foot_links} text_xs`}>
              <FaGreaterThan className={styles.icon} />
              My Account
            </p>
            <p className={`${styles.foot_links} text_xs`}>
              <FaGreaterThan className={styles.icon} />
              My Account
            </p>
            <p className={`${styles.foot_links} text_xs`}>
              <FaGreaterThan className={styles.icon} />
              My Account
            </p>
            <p className={`${styles.foot_links} text_xs`}>
              <FaGreaterThan className={styles.icon} />
              My Account
            </p>
          </div>
          <div className={styles.foot_box}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
