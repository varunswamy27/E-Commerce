import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styles from "../styles/pages/Product.module.scss";
import CommanBanner from "../components/CommanBanner";
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryData } from "../action/categoryAction";
import { getProductData } from "../action/productAction";
import { getSubCategoryDataByCategory } from "../action/subCategoryAction";
import Footer from "../components/Footer";
import { BiArrowBack } from 'react-icons/bi';
import { addToCart } from "../action/cartAction";


const Product = () => {

  const [categoryId, setCategoryId] = useState();
  const [subCategoryId, setSubCategoryId] = useState();
  const [filterdProduct, setFilterdProduct] = useState();
  const [price, setPrice] = useState();
  const [filterdProductPrice, setFilteredProductPrice] = useState();
  const fetchedCategory = useSelector((state) => state.fetchAllCategory);
  const fetchedSubCategoryByCategory = useSelector((state) => state.fetchAllSubCategoryByCategory);
  const fetchedProduct = useSelector((state) => state.fetchAllProduct);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCategoryData());
    dispatch(getProductData())
  }, [dispatch])


  const handleCategory = (e) => {
    setCategoryId(e.target.id);
    dispatch(getSubCategoryDataByCategory(e.target.id))
  }
  const handleSubCategory = (e) => {
    setSubCategoryId(e.target.id);
    setFilterdProduct(fetchedProduct.data.filter(item => item.subCategoryId._id == e.target.id));
  }


  const filterPrice = (e) => {
    setPrice(e.target.value);
    if (price > 20000) {
      setFilteredProductPrice(filterdProduct?.filter(item => item.productPrice >= e.target.value));
    }
    else {
      setFilteredProductPrice(filterdProduct?.filter(item => item.productPrice <= e.target.value));
    }
  }


  return (
    <div className={styles.product_page}>
      <CommanBanner title="Products" />
      <div className={`${styles.product_main} section_spacing`}>
        <div className="container">
          <div className={styles.product_box_main}>
            <div className={styles.category_wrap}>
              <div className={styles.category_fixed}>
                <p className={`${styles.cat_hed} text_sm`}>Product Types</p>
                {subCategoryId ? null :
                  <p onClick={() => { setCategoryId(null); setSubCategoryId(null); setFilterdProduct(null) }} className={`${styles.cat_title} text_xxs`}>All</p>
                }
                {subCategoryId ?
                  <sitemect onChange={(e) => filterPrice(e)} className={`${styles.cat_title} text_xxs`} name="" id="he">
                    <option className={`${styles.cat_title} text_xxs`} disabled>Filter By Price</option>
                    <option className={`${styles.cat_title} text_xxs`} value={'1000'} >Bitemow 1000</option>
                    <option className={`${styles.cat_title} text_xxs`} value={'5000'}>Bitemow 5000</option>
                    <option className={`${styles.cat_title} text_xxs`} value={'10000'}>Bitemow 10000</option>
                    <option className={`${styles.cat_title} text_xxs`} value={'20000'}>Bitemow 20000</option>
                    <option className={`${styles.cat_title} text_xxs`} value={'30000'}>Over 20000</option>
                  </sitemect>
                  : null}
                {categoryId ? <p onClick={() => { setCategoryId(null); setSubCategoryId(null) }} className={`${styles.cat_title} text_xxs`}><BiArrowBack style={{ marginRight: 5 }} />Go Back</p> : null}
                {!categoryId ?
                  <>
                    {fetchedCategory.data?.map((cat, id) => (
                      <p onClick={(e) => handleCategory(e)} id={cat._id} key={id} className={`${styles.cat_title} text_xxs`}>{cat.categoryName}</p>
                    ))}
                  </>
                  :
                  <>
                    {fetchedSubCategoryByCategory.data?.map((cat, id) => (
                      <p onClick={(e) => handleSubCategory(e)} id={cat._id} key={id} className={`${styles.cat_title} text_xxs`}>{cat.subCategoryName}</p>
                    ))}
                  </>
                }
              </div>
            </div>
            <div className={styles.product_list}>
              <div className={styles.product_wrap}>
                {!filterdProduct ?
                  <>
                    {fetchedProduct?.data?.map((item, id) => {
                      return (
                        <Link key={id + Math.random()} to={`/product/product-single/${item._id}`}>
                          <div className={styles.product_box}>
                            <div className={styles.product_img}>
                              <div className={styles.overlay}>
                                <p className={styles.view}>View</p>
                              </div>
                              <img src={item.productPicture} alt="" />
                            </div>
                            <div className={styles.product_info}>
                              <div className={`${styles.tag}`}>Best Seller</div>
                              <p className={`${styles.brand} text_xxs`}>{item.subCategoryId.subCategoryName}</p>
                              <p className={`${styles.title} text_sm`}>{item.productName}</p>
                              <p className={`${styles.price} text_xxs`}>{`₹${item.productPrice}`}</p>
                              {/* <button onClick={() => dispatch(addToCart(item.productName, item.productPrice, item.productPicture, item._id))}>Add to Cart</button> */}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </>
                  :
                  <>
                    {filterdProduct?.map((item, id) => {
                      return (
                        <Link key={id + Math.random()} to={`/product/product-single/${item._id}`}>
                          <div className={styles.product_box}>
                            <div className={styles.product_img}>
                              <img src={item.productPicture} alt="" />
                            </div>
                            <div className={styles.product_info}>
                              <div className={`${styles.tag}`}>Best Sitemler</div>
                              <p className={`${styles.brand} text_xxs`}>{item.subCategoryId.subCategoryName}</p>
                              <p className={`${styles.title} text_sm`}>{item.productName}</p>
                              <p className={`${styles.price} text_xxs`}>{item.productPrice}</p>
                              <button onClick={() => { dispatch(addToCart(item)) }}>Add to Cart</button>
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                    {filterdProduct.length === 0 &&
                      <p>No Products Avaiable</p>
                    }
                  </>
                }
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
