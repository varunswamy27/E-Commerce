import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import styles from "../styles/components/ProductListingSec.module.scss";
import { Link } from "react-router-dom";


const ProductListingSec = () => {

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios.get('https://go-gadgets.onrender.com/product')
      .then(function (response) {
        // handle success
        setProductData(response.data.data.slice(0,8));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])


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
          {productData && productData.map((item, id) => {
            return (
              <div key={id+item._id} className={styles.product_box}>
                <div className={styles.product_img}>
                  <img src={item.productPicture} alt="" />
                </div>
                <div className={styles.product_info}>
                  <div className={`${styles.tag}`}>Best Seller</div>
                  <p className={`${styles.brand} text_xxs`}>{item.subCategoryId.subCategoryName}</p>
                  <p className={`${styles.title} text_sm`}>{item.productName}</p>
                  <p className={`${styles.price} text_xxs`}>₹{item.productPrice}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className={`${styles.btn_wrap}`}>
          <Link to={'/product'}>
          <button className="text_xxs">View All Product</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductListingSec;
