import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom'
import CommanBanner from "../components/CommanBanner";
import styles from "../styles/pages/ProductSingle.module.scss";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ProductTab from "../sections/ProductTab";
import Footer from "../components/Footer";
import { getOneProductData } from "../action/productAction";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "../action/counterAction";
import { addToCart } from "../action/cartAction";

const ProductSingle = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const fetchedOneProduct = useSelector((state) => state.fetchOnlyOneProduct);
  const dispatch = useDispatch();
  const router = useLocation();


  useEffect(() => {
    const productId = router.pathname.split('/')[3];
    dispatch(getOneProductData(productId));
  }, [])


  return (
    <div className={styles.product_single_main}>
      <CommanBanner title="Product Single" />

      <div className={`${styles.product_single} section_spacing`}>
        <div className="container">
          <div className={styles.product_single_wrap}>
            <div className={styles.product_img}>
              <img src={fetchedOneProduct?.data?.productPicture} alt="" />
            </div>
            <div className={styles.product_info}>
              <p className={`${styles.title} text_md`}>{fetchedOneProduct?.data?.productName}</p>
              <p className={styles.rating}>
                <span>5.0</span>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <p className={`${styles.price} text_md`}>{`$${fetchedOneProduct?.data?.productPrice}`}</p>
              <p className={`${styles.desp} text_xxs`}>
                {fetchedOneProduct?.data?.productShortDescription}
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
                  onClick={() => dispatch(decNumber())}
                >
                  <AiOutlineMinus />
                </div>
                <input
                  type="text"
                  name=""
                  id=""
                  value={myState}
                  className={styles.incre}
                />
                <div
                  className={styles.counter}
                  onClick={() => dispatch(incNumber(1))}
                >
                  <AiOutlinePlus />
                </div>
              </div>
              <div className={styles.btn_wrap}>
                <button className={styles.cart} onClick={() => dispatch(addToCart(fetchedOneProduct?.data?.productName, fetchedOneProduct?.data?.productPrice, fetchedOneProduct?.data?.productPicture, fetchedOneProduct?.data?._id, myState))}>Add to Cart</button>
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
