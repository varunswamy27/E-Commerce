import React from "react";
import styles from "../styles/components/ProductCircle.module.scss";

const ProductCircle = () => {
  return (
    <section className={styles.product_circle}>
      <div className="container">
        <div className={styles.product_wrap}>
          <div className={styles.product_box}>
            <div className={styles.product_outside}></div>
          </div>
          <div className={styles.product_box}>
            <div className={styles.product_outside}></div>
          </div>
          <div className={styles.product_box}>
            <div className={styles.product_outside}></div>
          </div>
          <div className={styles.product_box}>
            <div className={styles.product_outside}></div>
          </div>
          <div className={styles.product_box}>
            <div className={styles.product_outside}></div>
          </div>
          <div className={styles.product_box}>
            <div className={styles.product_outside}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCircle;
