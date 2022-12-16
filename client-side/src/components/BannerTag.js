import React from "react";
import styles from "../styles/components/BannerTag.module.scss";

const BannerTag = () => {
  return (
    <section className={styles.banner_section}>
      <div className="container">
        <div className={styles.banner_wrap}>
          <div className={styles.banner_box}>
            <div className={styles.icon}>
              <p>Hello</p>
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
              <p>Hello</p>
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
              <p>Hello</p>
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
