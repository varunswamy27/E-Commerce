import React, { useEffect } from "react";
import styles from "../styles/pages/Product.module.scss";
import CommanBanner from "../components/CommanBanner";
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryData } from "../action/categoryAction";
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

  const fetchedCategory = useSelector((state) => state.fetchAllCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryData())
  }, [dispatch])

  console.log(fetchedCategory);


  const productData = [{
    productImg: prod1,
    tag: "Best Seller",
    brand: "Brandy",
    title: "Bacardi 151",
    price: "$49.00",
  },
  {
    productImg: prod2,
    tag: "Best Seller",
    brand: "Brandy",
    title: "Bacardi 151",
    price: "$49.00",
  },
  {
    productImg: prod3,
    tag: "Best Seller",
    brand: "Brandy",
    title: "Bacardi 151",
    price: "$49.00",
  },
  {
    productImg: prod4,
    tag: "Best Seller",
    brand: "Brandy",
    title: "Bacardi 151",
    price: "$49.00",
  },
  {
    productImg: prod5,
    tag: "Best Seller",
    brand: "Brandy",
    title: "Bacardi 151",
    price: "$49.00",
  },
  {
    productImg: prod6,
    tag: "Best Seller",
    brand: "Brandy",
    title: "Bacardi 151",
    price: "$49.00",
  },
  {
    productImg: prod7,
    tag: "Best Seller",
    brand: "Brandy",
    title: "Bacardi 151",
    price: "$49.00",
  },
  {
    productImg: prod8,
    tag: "Best Seller",
    brand: "Brandy",
    title: "Bacardi 151",
    price: "$49.00",
  },
  ]

  return (
    <div className={styles.product_page}>
      <CommanBanner title="Products" />
      <div className={`${styles.product_main} section_spacing`}>
        <div className="container">
          <div className={styles.product_box_main}>
            <div className={styles.category_wrap}>
              <div className={styles.category_fixed}>
                <p className={`${styles.cat_hed} text_sm`}>Product Types</p>
                <p className={`${styles.cat_title} text_xxs`}>All</p>
                <select className={`${styles.cat_title} text_xxs`} name="" id="">
                  <option className={`${styles.cat_title} text_xxs`} value="">Brandy</option>
                  <option className={`${styles.cat_title} text_xxs`} value="">Demo</option>
                </select>
              </div>
            </div>
            <div className={styles.product_list}>
              <div className={styles.product_wrap}>
                {productData.map((el, id) => {
                  return (
                    <div key={id + Math.random()} className={styles.product_box}>
                      <div className={styles.product_img}>
                        <img src={el.productImg} alt="" />
                      </div>
                      <div className={styles.product_info}>
                        <div className={`${styles.tag}`}>{el.tag}</div>
                        <p className={`${styles.brand} text_xxs`}>{el.brand}</p>
                        <p className={`${styles.title} text_sm`}>{el.title}</p>
                        <p className={`${styles.price} text_xxs`}>{el.price}</p>
                      </div>
                    </div>
                  )
                })}
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
