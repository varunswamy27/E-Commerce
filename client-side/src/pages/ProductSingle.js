import React from "react";
import CommanBanner from "../components/CommanBanner";
import styles from "../styles/pages/ProductSingle.module.scss";
import productimg from "../img/product/prod-1.jpg";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import ProductTab from "../sections/ProductTab";
import Footer from "../components/Footer";

const ProductSingle = () => {
  const [quantity, setQuntity] = useState(1);

  return (
    <div className={styles.product_single_main}>
      <CommanBanner title="Product Single" />

      <div className={`${styles.product_single} section_spacing`}>
        <div className="container">
          <div className={styles.product_single_wrap}>
            <div className={styles.product_img}>
              <img src={productimg} alt="" />
            </div>
            <div className={styles.product_info}>
              <p className={`${styles.title} text_md`}>Bacardi 151 Degree</p>
              <p className={styles.rating}>
                <span>5.0</span>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <p className={`${styles.price} text_md`}>$120.00</p>
              <p className={`${styles.desp} text_xxs`}>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p className={`${styles.desp} text_xxs`}>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
              <div className={styles.counter_wrap}>
                <div
                  className={styles.counter}
                  onClick={() =>
                    quantity > 1 ? setQuntity(quantity - 1) : setQuntity(1)
                  }
                >
                  <AiOutlineMinus />
                </div>
                <input
                  type="text"
                  name=""
                  id=""
                  value={quantity}
                  className={styles.incre}
                />
                <div
                  className={styles.counter}
                  onClick={() => setQuntity(quantity + 1)}
                >
                  <AiOutlinePlus />
                </div>
              </div>
              <div className={styles.btn_wrap}>
                <button className={styles.cart}>Add to Cart</button>
                <button className={styles.buy}>Buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductTab />
      <Footer />
    </div>
  );
};

export default ProductSingle;
