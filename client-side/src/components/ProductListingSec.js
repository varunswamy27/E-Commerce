import React from "react";
import styles from "../styles/components/ProductListingSec.module.scss";
import prod1 from "../img/product/prod-1.jpg";
import prod2 from "../img/product/prod-2.jpg";
import prod3 from "../img/product/prod-3.jpg";
import prod4 from "../img/product/prod-4.jpg";
import prod5 from "../img/product/prod-5.jpg";
import prod6 from "../img/product/prod-6.jpg";
import prod7 from "../img/product/prod-7.jpg";
import prod8 from "../img/product/prod-8.jpg";

const ProductListingSec = () => {
  return (
    <section className={`${styles.product_listing} section_spacing`}>
      <div className="container">
        <div className={styles.product_head}>
          <p className={`${styles.redtext} text_xxs`}>
            Our Delightful offerings
          </p>
          <p className={`${styles.title} text_lg`}>Tastefully Yours</p>
        </div>
        <div className={styles.product_wrap}>
          <div className={styles.product_box}>
            <div className={styles.product_img}>
              <img src={prod1} alt="" />
            </div>
            <div className={styles.product_info}>
              <div className={`${styles.tag}`}>Best Seller</div>
              <p className={`${styles.brand} text_xxs`}>Brandy</p>
              <p className={`${styles.title} text_sm`}>Bacardi 151</p>
              <p className={`${styles.price} text_xxs`}>$49.00</p>
            </div>
          </div>
          <div className={styles.product_box}>
            <div className={styles.product_img}>
              <img src={prod2} alt="" />
            </div>
            <div className={styles.product_info}>
              <div className={`${styles.tag}`}>Best Seller</div>
              <p className={`${styles.brand} text_xxs`}>Brandy</p>
              <p className={`${styles.title} text_sm`}>Bacardi 151</p>
              <p className={`${styles.price} text_xxs`}>$49.00</p>
            </div>
          </div>
          <div className={styles.product_box}>
            <div className={styles.product_img}>
              <img src={prod3} alt="" />
            </div>
            <div className={styles.product_info}>
              <div className={`${styles.tag}`}>Best Seller</div>
              <p className={`${styles.brand} text_xxs`}>Brandy</p>
              <p className={`${styles.title} text_sm`}>Bacardi 151</p>
              <p className={`${styles.price} text_xxs`}>$49.00</p>
            </div>
          </div>
          <div className={styles.product_box}>
            <div className={styles.product_img}>
              <img src={prod4} alt="" />
            </div>
            <div className={styles.product_info}>
              <div className={`${styles.tag}`}>Best Seller</div>
              <p className={`${styles.brand} text_xxs`}>Brandy</p>
              <p className={`${styles.title} text_sm`}>Bacardi 151</p>
              <p className={`${styles.price} text_xxs`}>$49.00</p>
            </div>
          </div>
          <div className={styles.product_box}>
            <div className={styles.product_img}>
              <img src={prod5} alt="" />
            </div>
            <div className={styles.product_info}>
              <div className={`${styles.tag}`}>Best Seller</div>
              <p className={`${styles.brand} text_xxs`}>Brandy</p>
              <p className={`${styles.title} text_sm`}>Bacardi 151</p>
              <p className={`${styles.price} text_xxs`}>$49.00</p>
            </div>
          </div>
          <div className={styles.product_box}>
            <div className={styles.product_img}>
              <img src={prod6} alt="" />
            </div>
            <div className={styles.product_info}>
              <div className={`${styles.tag}`}>Best Seller</div>
              <p className={`${styles.brand} text_xxs`}>Brandy</p>
              <p className={`${styles.title} text_sm`}>Bacardi 151</p>
              <p className={`${styles.price} text_xxs`}>$49.00</p>
            </div>
          </div>
          <div className={styles.product_box}>
            <div className={styles.product_img}>
              <img src={prod7} alt="" />
            </div>
            <div className={styles.product_info}>
              <div className={`${styles.tag}`}>Best Seller</div>
              <p className={`${styles.brand} text_xxs`}>Brandy</p>
              <p className={`${styles.title} text_sm`}>Bacardi 151</p>
              <p className={`${styles.price} text_xxs`}>$49.00</p>
            </div>
          </div>
          <div className={styles.product_box}>
            <div className={styles.product_img}>
              <img src={prod8} alt="" />
            </div>
            <div className={styles.product_info}>
              <div className={`${styles.tag}`}>Best Seller</div>
              <p className={`${styles.brand} text_xxs`}>Brandy</p>
              <p className={`${styles.title} text_sm`}>Bacardi 151</p>
              <p className={`${styles.price} text_xxs`}>$49.00</p>
            </div>
          </div>
        </div>

        <div className={`${styles.btn_wrap}`}>
          <button className="text_xxs">View All Product</button>
        </div>
      </div>
    </section>
  );
};

export default ProductListingSec;
