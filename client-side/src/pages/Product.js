import React from "react";
import styles from "../styles/pages/Product.module.scss";
import CommanBanner from "../components/CommanBanner";
import prod1 from "../img/product/prod-1.jpg";
import prod2 from "../img/product/prod-2.jpg";
import prod3 from "../img/product/prod-3.jpg";
import prod4 from "../img/product/prod-4.jpg";
import prod5 from "../img/product/prod-5.jpg";
import prod6 from "../img/product/prod-6.jpg";
import prod7 from "../img/product/prod-7.jpg";
import prod8 from "../img/product/prod-8.jpg";
import Footer from "../components/Footer";

const Product = () => {
  return (
    <div className={styles.product_page}>
      <CommanBanner title="Products" />
      <div className={`${styles.product_main} section_spacing`}>
        <div className="container">
          <div className={styles.product_box_main}>
            <div className={styles.category_wrap}>
              <div className={styles.category_fixed}>
                <p className={`${styles.cat_hed} text_sm`}>Product Types</p>
                <select className={`${styles.cat_title} text_xxs`} name="" id="">
                    <option className={`${styles.cat_title} text_xxs`} value="">Brandy</option>
                    <option className={`${styles.cat_title} text_xxs`} value="">Demo</option>
                </select>
                <select className={`${styles.cat_title} text_xxs`} name="" id="">
                    <option className={`${styles.cat_title} text_xxs`} value="">Rum</option>
                    <option className={`${styles.cat_title} text_xxs`} value="">Demo</option>
                </select>
                <select className={`${styles.cat_title} text_xxs`} name="" id="">
                    <option className={`${styles.cat_title} text_xxs`} value="">Gin</option>
                    <option className={`${styles.cat_title} text_xxs`} value="">Demo</option>
                </select>
                <select className={`${styles.cat_title} text_xxs`} name="" id="">
                    <option className={`${styles.cat_title} text_xxs`} value="">Vodka</option>
                    <option className={`${styles.cat_title} text_xxs`} value="">Demo</option>
                </select>
                <select className={`${styles.cat_title} text_xxs`} name="" id="">
                    <option className={`${styles.cat_title} text_xxs`} value="">Beer</option>
                    <option className={`${styles.cat_title} text_xxs`} value="">Demo</option>
                </select>
              </div>
            </div>
            <div className={styles.product_list}>
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
