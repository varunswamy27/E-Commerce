import React from 'react';
import styles from '../styles/sections/CommanModel.module.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryData, createCategory, removeCategory, modifyCategory } from '../action/categoryAction';
import { getProductData, createProduct } from '../action/productAction';

const ProductComponent = () => {

  const [productData, setProductData] = useState({ productName: "", productShortDescription: "", productDescription: "", productPrice: "", categoryId: "", subCategoryId: "" })
  const [currentId, setCurrentId] = useState(null);


  const fetchedProduct = useSelector((state) => state.fetchAllProduct);
  const fetchedCategoryInput = useSelector((state) => state.fetchAllCategory);
  const createdProduct = useSelector((state) => state.createNewProduct)
  const deletedCategory = useSelector((state) => state.removeSelectedCategory);
  const updatedCategory = useSelector((state) => state.modifySelectedCategory);
  const populatedCategory = currentId ? fetchedCategoryInput.data?.find((p) => p._id === currentId) : null


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductData())
  }, [createdProduct, deletedCategory, currentId, dispatch])



  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(modifyCategory(currentId, productData));
    }
    else {
      dispatch(createProduct(productData))
    }
  }


  useEffect(() => {
    if (populatedCategory) {
      setProductData({ categoryName: populatedCategory.categoryName, categoryDescription: populatedCategory.categoryDescription })
    }
    else {
      return;
    }
  }, [populatedCategory])



  return (
    <section className={styles.comman_model_main_section}>
      <p id='catBox' className={`${styles.title} text_md`}>{currentId ? "Edit Product" : "Add Product"}</p>
      <div className={styles.add_card}>
        <div className={styles.input_box}>
          <label htmlFor="">Product Name:</label>
          <input onChange={(e) => setProductData({ ...productData, productName: e.target.value })} value={productData.productName} type="text" name='productName' placeholder='Enter Product' />
          {productData.productName === " " ?
            <p className={styles.fielderror}>Enter Product Field</p>
            :
            null
          }
        </div>
        <div className={styles.input_box}>
          <label htmlFor="">Product Short-Description:</label>
          <input onChange={(e) => setProductData({ ...productData, productShortDescription: e.target.value })} value={productData.productShortDescription} type="text" name='productShortDescription' placeholder='Enter Product Short-Description' />
          {productData.productShortDescription === " " ?
            <p className={styles.fielderror}>Enter Product Short-Description Field</p>
            :
            null
          }
        </div>
        <div className={styles.input_box}>
          <label htmlFor="">Product Description:</label>
          <input onChange={(e) => setProductData({ ...productData, productDescription: e.target.value })} value={productData.productDescription} type="text" name='productDescription' placeholder='Enter Product Description' />
          {productData.productDescription === " " ?
            <p className={styles.fielderror}>Enter Product Description Field</p>
            :
            null
          }
        </div>
        <div className={styles.input_box}>
          <label htmlFor="">Product Price:</label>
          <input onChange={(e) => setProductData({ ...productData, productPrice: e.target.value })} value={productData.productPrice} type="text" name='productPrice' placeholder='Enter Product Price' />
          {productData.productPrice === " " ?
            <p className={styles.fielderror}>Enter Product Price Field</p>
            :
            null
          }
        </div>
        <div className={styles.input_box}>
          <label htmlFor="">Category Id:</label>
          <input onChange={(e) => setProductData({ ...productData, categoryId: e.target.value })} value={productData.categoryId} type="text" name='categoryId' placeholder='Enter Category Id' />
          {productData.categoryId === " " ?
            <p className={styles.fielderror}>Enter Category Id Field</p>
            :
            null
          }
        </div>
        <div className={styles.input_box}>
          <label htmlFor="">Sub-Category Id:</label>
          <input onChange={(e) => setProductData({ ...productData, subCategoryId: e.target.value })} value={productData.subCategoryId} type="text" name='subCategoryId' placeholder='Enter Sub-Category Id' />
          {productData.subCategoryId === " " ?
            <p className={styles.fielderror}>Enter Sub-Category Id Field</p>
            :
            null
          }
        </div>

        {createdProduct === "Product Successfully Created" ? <p className={styles.success}>{createdProduct}{updatedCategory}</p> : <p className={styles.error}>{createdProduct}</p>}
        <button onClick={handleSubmit} className={styles.add_btn}>{currentId ? "Update Product" : "Add Product"}</button>
      </div>

      <p className={`${styles.title} text_md`}>Product List</p>

      <div className={styles.add_card}>
        <input className={styles.search_inp} placeholder='Start typing to search for categories' type="text" name="" id="" />

        <table className={styles.table}>
          <tbody>
            <tr className={styles.tr}>
              <th>Product Name</th>
              <th>ID</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
            {fetchedProduct.data?.map((item, id) => {
              return (
                <tr key={id}>
                  <td>{item.productName}</td>
                  <td>{item._id}</td>
                  <td>{item.productPrice}</td>
                  <td>
                    <button onClick={() => dispatch(removeCategory(item._id))} className={styles.delete_btn}>Delete</button>
                    <a href='#catBox'><button onClick={() => setCurrentId(item._id)} className={styles.edit_btn}>Edit</button></a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ProductComponent