import React from 'react';
import styles from '../styles/sections/CommanModel.module.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductData, createProduct, removeProduct, modifyProduct } from '../action/productAction';

const ProductComponent = () => {

  const [productData, setProductData] = useState({
    productName: "", productShortDescription: "", productDescription: "", productPrice: "", categoryId: "", subCategoryId: ""
  });
  const [productImage, setProductImage] = useState('');
  const [currentId, setCurrentId] = useState(null);


  const fetchedCategory = useSelector((state) => state.fetchAllCategory);
  const fetchedSubCategory = useSelector((state) => state.fetchAllSubCategory);

  const fetchedProduct = useSelector((state) => state.fetchAllProduct);
  const fetchedProductInput = useSelector((state) => state.fetchAllProduct);
  const createdProduct = useSelector((state) => state.createNewProduct);
  const deletedProduct = useSelector((state) => state.removeSelectedProduct);
  const updatedProduct = useSelector((state) => state.modifySelectedProduct);
  const populatedProduct = currentId ? fetchedProductInput.data?.find((p) => p._id === currentId) : null


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductData())
  }, [createdProduct, deletedProduct, currentId, dispatch])



  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('public', productImage);
    formData.append('productName', productData.productName);
    formData.append('productShortDescription', productData.productShortDescription);
    formData.append('productDescription', productData.productDescription);
    formData.append('productPrice', productData.productPrice);
    formData.append('categoryId', productData.categoryId);
    formData.append('subCategoryId', productData.subCategoryId);

    if (currentId) {
      dispatch(modifyProduct(currentId, productData));
    }
    else {
      dispatch(createProduct(formData))
    }
  }


  useEffect(() => {
    if (populatedProduct) {
      setProductData({
        productName: populatedProduct.productName,
        productShortDescription: populatedProduct.productShortDescription,
        productDescription: populatedProduct.productDescription,
        productPrice: populatedProduct.productPrice,
        productPicture: populatedProduct.productPicture,
        categoryId: populatedProduct.categoryId._id,
        subCategoryId: populatedProduct.subCategoryId._id
      })
    }
    else {
      return;
    }
  }, [populatedProduct])


  console.log(fetchedSubCategory)

  return (
    <section className={styles.comman_model_main_section}>
      <p id='proBox' className={`${styles.title} text_md`}>{currentId ? "Edit Product" : "Add Product"}</p>
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
        {/* <div className={styles.input_box}>
          <label htmlFor="">Product Picture:</label>
          <input onChange={(e) => setProductData({ ...productData, productPicture: e.target.value })} value={productData.productPicture} type="text" name='productPicture' placeholder='Enter Product Picture' />
          {productData.productPicture === " " ?
            <p className={styles.fielderror}>Enter Product Picture Field</p>
            :
            null
          }
        </div> */}
        <div className={styles.input_box}>
          <label htmlFor="public">Product Picture:</label>
          <input onChange={(e) => setProductImage(e.target.files[0])} type="file" id='file' name='public' placeholder='Enter Product Picture' />
          {productData.productPicture === " " ?
            <p className={styles.fielderror}>Enter Product Picture Field</p>
            :
            null
          }
        </div>
        <div className={styles.input_box}>
          <label htmlFor="">Category</label>
          {/* <input onChange={(e) => setProductData({ ...productData, categoryId: cat })} value={productData.categoryId} type="text" name='categoryId' placeholder='Enter Category Id' /> */}
          <select onChange={(e) => setProductData({ ...productData, categoryId: e.target.value })}>
            <option selected={false} disabled="disabled">Select a Category</option>
            {fetchedCategory?.data?.map((item, id) => {
              return (
                <option key={id} value={item._id}>{item.categoryName}</option>
              )
            })}
          </select>
          {productData.categoryId === " " ?
            <p className={styles.fielderror}>Enter Category Id Field</p>
            :
            null
          }
        </div>
        <div className={styles.input_box}>
          <label htmlFor="">Sub-Category Id:</label>
          {/* <input onChange={(e) => setProductData({ ...productData, subCategoryId: e.target.value })} value={productData.subCategoryId} type="text" name='subCategoryId' placeholder='Enter Sub-Category Id' /> */}
          <select onChange={(e) => setProductData({ ...productData, subCategoryId: e.target.value })}>
            <option selected={false} disabled="disabled">Select a Sub-Category</option>
            {fetchedSubCategory?.data?.map((item, id) => {
              return (
                <option key={id} value={item._id}>{item.subCategoryName}</option>
              )
            })}
          </select>
          {productData.subCategoryId === " " ?
            <p className={styles.fielderror}>Enter Sub-Category Id Field</p>
            :
            null
          }
        </div>

        {createdProduct === "Product Successfully Created" || updatedProduct ? <p className={styles.success}>{createdProduct}{updatedProduct}</p> : <p className={styles.error}>{createdProduct}</p>}
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
                    <button onClick={() => dispatch(removeProduct(item._id))} className={styles.delete_btn}>Delete</button>
                    <a href='#proBox'><button onClick={() => setCurrentId(item._id)} className={styles.edit_btn}>Edit</button></a>
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