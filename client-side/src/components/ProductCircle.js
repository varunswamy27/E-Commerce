import React from "react";
import styles from "../styles/components/ProductCircle.module.scss";
import kind1 from "../img/home/kind-1.jpg";
import kind2 from "../img/home/kind-2.jpg";
import kind3 from "../img/home/kind-3.jpg";
import kind4 from "../img/home/kind-4.jpg";
import kind5 from "../img/home/kind-5.jpg";
import kind6 from "../img/home/kind-6.jpg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategoryData } from "../action/categoryAction";

const ProductCircle = () => {

  // const myCategory = useSelector((state) => state.fetchAllCategory)
  // console.log(myCategory)
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(getCategoryData())
  // },[dispatch])

  return (
    <section className={styles.product_circle}>
      <div className="container">
        <div className={`${styles.product_wrap}`}>
          <div className={styles.product_div}>
            <div className={styles.box}>
              <div className={`${styles.product_box}`}>
                <img src={kind1} alt="" />
              </div>
              <p className="text_sm">Brandy</p>
            </div>
            <div className={styles.box}>
            <div className={`${styles.product_box}`}>
              <img src={kind2} alt="" />
            </div>
            <p className="text_sm">Gin</p>
            </div>
            <div className={styles.box}>
            <div className={`${styles.product_box}`}>
              <img src={kind3} alt="" />
            </div>
            <p className="text_sm">Rum</p>
            </div>
          </div>
          <div className={styles.product_div}>
          <div className={styles.box}>
            <div className={`${styles.product_box}`}>
              <img src={kind4} alt="" />
            </div>
            <p className="text_sm">Tequila</p>
            </div>
            <div className={styles.box}>
            <div className={`${styles.product_box}`}>
              <img src={kind5} alt="" />
            </div>
            <p className="text_sm">Vodka</p>
            </div>
            <div className={styles.box}>
            <div className={`${styles.product_box}`}>
              <img src={kind6} alt="" />
            </div>
            <p className="text_sm">Whiskey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCircle;
