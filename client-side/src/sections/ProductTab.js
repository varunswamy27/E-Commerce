import React from "react";
import styles from "../styles/sections/ProductTab.module.scss";
import { useState } from "react";

const ProductTab = () => {
  const [toggle, setToggle] = useState(1);

  return (
    <section className={`${styles.product_tab} section_spacing_bottom`}>
      <div className="container">
        <div className={styles.tab_wrap}>
          <div
            onClick={() => {
              setToggle(1);
            }}
            className={
              toggle === 1
                ? `${styles.active} text_sm`
                : `${styles.product_btn} text_sm`
            }
          >
            Description
          </div>
          <div
            onClick={() => {
              setToggle(2);
            }}
            className={
              toggle === 2
                ? `${styles.active} text_sm`
                : `${styles.product_btn} text_sm`
            }
          >
            Reviews
          </div>
        </div>
        <div className={toggle === 1 ? styles.product_info : styles.product_none}>
          <div className={styles.product_info_wrap}>
            <p className={`${styles.title} text_reg`}>Bacardi 151 Degree</p>
            <p className={`${styles.desp} text_xxs`}>
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word "and" and the Little Blind Text should turn around and return
              to its own, safe country. But nothing the copy said could convince
              her and so it didn’t take long until a few insidious Copy Writers
              ambushed her, made her drunk with Longe and Parole and dragged her
              into their agency, where they abused her for their.
            </p>
          </div>
        </div>
        <div className={toggle === 2 ? styles.product_info : styles.product_none}>
          <div className={styles.product_info_wrap}>
            <p className={`${styles.title} text_reg`}>Bacardi 152 Degree</p>
            <p className={`${styles.desp} text_xxs`}>
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word "and" and the Little Blind Text should turn around and return
              to its own, safe country. But nothing the copy said could convince
              her and so it didn’t take long until a few insidious Copy Writers
              ambushed her, made her drunk with Longe and Parole and dragged her
              into their agency, where they abused her for their.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTab;
