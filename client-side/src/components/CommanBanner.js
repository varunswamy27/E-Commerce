import React from "react";
import styles from "../styles/components/CommonBanner.module.scss";

const CommanBanner = ({ title }) => {
  return (
    <section className={styles.comman_banner}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.banner_box}>
          <p className={`${styles.title} text_xxl`}>{title}</p>
        </div>
      </div>
    </section>
  );
};

export default CommanBanner;
