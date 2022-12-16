import React from "react";
import styles from "../styles/components/BannerTag.module.scss";
import support from "../img/icons/support.png";
import money from "../img/icons/cashback.png";
import delivery from "../img/icons/free-delivery.png";



const BannerTag = () => {
  return (
    <section className={styles.banner_section}>
      <div className="container">
        <div className={styles.banner_wrap}>
          <div className={styles.banner_box}>
            <div className={styles.icon}>
              <img src={support} alt="Support" />
            </div>
            <div className={styles.info}>
              <p className={`${styles.title} text_xs`}>ONLINE SUPPORT 24/7</p>
              <p className={`${styles.desp} text_xxs`}>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
          <div className={styles.banner_box}>
            <div className={styles.icon}>
            <img src={money} alt="Support" />
            </div>
            <div className={styles.info}>
              <p className={`${styles.title} text_xs`}>
                MONEY BACK
                <br /> GUARANTEE
              </p>
              <p className={`${styles.desp} text_xxs`}>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
          <div className={styles.banner_box}>
            <div className={styles.icon}>
            <img src={delivery} alt="Support" />
            </div>
            <div className={styles.info}>
              <p className={`${styles.title} text_xs`}>FREE SHIPPING & <br />RETURN</p>
              <p className={`${styles.desp} text_xxs`}>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTag;
