import React from "react";
import styles from "../styles/components/Footer.module.scss";
import { FaGreaterThan } from "react-icons/fa";
import { ImMap } from "react-icons/im";
import { MdCall } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";


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
              <div className={styles.social_icon}>
                <AiOutlineTwitter/>
              </div>
              <div className={styles.social_icon}>
              <FaFacebookF/>
              </div>
              <div className={styles.social_icon}>
              <AiOutlineInstagram/>
              </div>
            </div>
          </div>
          <div className={styles.foot_box}>
            <p className={`${styles.foot_title} text_sm`}>My Accounts</p>
            <p className={`${styles.foot_links} text_xxs`}>
              <FaGreaterThan className={styles.icon} />
              My Account
            </p>
            <p className={`${styles.foot_links} text_xxs`}>
              <FaGreaterThan className={styles.icon} />
              Register{" "}
            </p>
            <p className={`${styles.foot_links} text_xxs`}>
              <FaGreaterThan className={styles.icon} />
              Log In{" "}
            </p>
            <p className={`${styles.foot_links} text_xxs`}>
              <FaGreaterThan className={styles.icon} />
              My Order{" "}
            </p>
          </div>
          <div className={styles.foot_box}>
            <p className={`${styles.foot_title} text_sm`}>Information</p>
            <p className={`${styles.foot_links} text_xxs`}>
              <FaGreaterThan className={styles.icon} />
              About us{" "}
            </p>
            <p className={`${styles.foot_links} text_xxs`}>
              <FaGreaterThan className={styles.icon} />
              Catalog{" "}
            </p>
            <p className={`${styles.foot_links} text_xxs`}>
              <FaGreaterThan className={styles.icon} />
              Contact us{" "}
            </p>
            <p className={`${styles.foot_links} text_xxs`}>
              <FaGreaterThan className={styles.icon} />
              Term & Conditions{" "}
            </p>
          </div>
          <div className={styles.foot_box}>
            <p className={`${styles.foot_title} text_sm`}>Quick Link</p>
            <p className={`${styles.foot_links} text_xxs`}>
              <FaGreaterThan className={styles.icon} />
              New User{" "}
            </p>
            <p className={`${styles.foot_links} text_xxs`}>
              <FaGreaterThan className={styles.icon} />
              Help Center{" "}
            </p>
            <p className={`${styles.foot_links} text_xxs`}>
              <FaGreaterThan className={styles.icon} />
              Report Spam{" "}
            </p>
            <p className={`${styles.foot_links} text_xxs`}>
              <FaGreaterThan className={styles.icon} />
              Faq's{" "}
            </p>
          </div>
          <div className={styles.foot_box}>
            <p className={`${styles.foot_title} text_sm`}>Have a Questions?</p>
            <p className={`${styles.foot_links} text_xs`}>
              <ImMap className={styles.icon2} />
              203 Fake St. Mountain View, San Francisco, California, USA{" "}
            </p>
            <p className={`${styles.foot_links} text_xxs`}>
              <MdCall className={styles.icon2} />
              +2 392 3929 210{" "}
            </p>
            <p className={`${styles.foot_links} text_xxs`}>
              <FaPaperPlane className={styles.icon2} />
              info@yourdomain.com{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
