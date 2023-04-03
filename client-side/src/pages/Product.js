import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styles from "../styles/pages/Product.module.scss";
import CommanBanner from "../components/CommanBanner";
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryData } from "../action/categoryAction";
import { getProductData } from "../action/productAction";
import { getSubCategoryDataByCategory } from "../action/subCategoryAction";
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

  const [categoryId, setCategoryId] = useState();
  const [subCategoryId, setSubCategoryId] = useState();
  const [filterdProduct, setFilterdProduct] = useState();
  const fetchedCategory = useSelector((state) => state.fetchAllCategory);
  const fetchedSubCategoryByCategory = useSelector((state) => state.fetchAllSubCategoryByCategory);
  const fetchedProduct = useSelector((state) => state.fetchAllProduct);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryData());
    dispatch(getProductData())
  }, [dispatch])

  // console.log(categoryId);

  const handleCategory = (e) => {
    setCategoryId(e.target.id);
    dispatch(getSubCategoryDataByCategory(e.target.id))
  }
  const handleSubCategory = (e) => {
    setSubCategoryId(e.target.id);
    setFilterdProduct(fetchedProduct.data.filter(item => item.subCategoryId._id == e.target.id));
  }

  console.log(filterdProduct);
  console.log(fetchedProduct.data)


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
                {categoryId ? <p onClick={() => setCategoryId(null)} className={`${styles.cat_title} text_xxs`}>Go Back</p> : null}
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
                    {fetchedProduct?.data?.map((el, id) => {
                      return (
                        <Link to={`/product/product-single/${el._id}`}>
                          <div key={id + Math.random()} className={styles.product_box}>
                            <div className={styles.product_img}>
                              <img src={el.productPicture} alt="" />
                            </div>
                            <div className={styles.product_info}>
                              <div className={`${styles.tag}`}>Best Seller</div>
                              <p className={`${styles.brand} text_xxs`}>{el.subCategoryId.subCategoryName}</p>
                              <p className={`${styles.title} text_sm`}>{el.productName}</p>
                              <p className={`${styles.price} text_xxs`}>{el.productPrice}</p>
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </>
                  :
                  <>
                    {filterdProduct?.map((el, id) => {
                      return (
                        <Link to={`/product/product-single/${el._id}`}>
                          <div key={id + Math.random()} className={styles.product_box}>
                            <div className={styles.product_img}>
                              <img src={el.productPicture} alt="" />
                            </div>
                            <div className={styles.product_info}>
                              <div className={`${styles.tag}`}>Best Seller</div>
                              <p className={`${styles.brand} text_xxs`}>{el.subCategoryId.subCategoryName}</p>
                              <p className={`${styles.title} text_sm`}>{el.productName}</p>
                              <p className={`${styles.price} text_xxs`}>{el.productPrice}</p>
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
