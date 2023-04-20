import React from 'react';
import styles from '../styles/sections/CommanModel.module.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryData, createCategory, removeCategory, modifyCategory } from '../action/categoryAction';


const UserComponent = () => {
  const [categoryData, setCategoryData] = useState({ categoryName: "", categoryDescription: "" })
  const [currentId, setCurrentId] = useState(null);


  const fetchedCategory = useSelector((state) => state.fetchAllCategory);
  const fetchedCategoryInput = useSelector((state) => state.fetchAllCategory);
  const createdCategory = useSelector((state) => state.createNewCategory)
  const deletedCategory = useSelector((state) => state.removeSelectedCategory);
  const updatedCategory = useSelector((state) => state.modifySelectedCategory);
  const populatedCategory = currentId ? fetchedCategoryInput.data?.find((p) => p._id === currentId) : null


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryData())
  }, [createdCategory, deletedCategory, currentId, dispatch])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(modifyCategory(currentId, categoryData));
    }
    else {
      dispatch(createCategory(categoryData))
    }
  }


  useEffect(() => {
    if (populatedCategory) {
      setCategoryData({ categoryName: populatedCategory.categoryName, categoryDescription: populatedCategory.categoryDescription })
    }
    else {
      return;
    }
  }, [populatedCategory])



  return (
    <section className={styles.comman_model_main_section}>
      <p id='catBox' className={`${styles.title} text_md`}>{currentId ? "Edit User" : "Add User"}</p>
      <div className={styles.add_card}>
        <div className={styles.input_box}>
          <label htmlFor="">Category Name:</label>
          <input onChange={(e) => setCategoryData({ ...categoryData, categoryName: e.target.value })} value={categoryData.categoryName} type="text" name='categoryName' placeholder='Enter Category' />
          {categoryData.categoryName === " " ?
            <p className={styles.fielderror}>Enter Category Field</p>
            :
            null
          }
        </div>
        <div className={styles.input_box}>
          <label htmlFor="">Category Description:</label>
          <input onChange={(e) => setCategoryData({ ...categoryData, categoryDescription: e.target.value })} value={categoryData.categoryDescription} type="text" name='categoryDescription' placeholder='Enter Category Description' />
          {categoryData.categoryDescription === " " ?
            <p className={styles.fielderror}>Enter Category Description Field</p>
            :
            null
          }
        </div>
        {createdCategory === "Category Successfully Created" || updatedCategory ? <p className={styles.success}>{createdCategory}{updatedCategory}</p> : <p className={styles.error}>{createdCategory}</p>}
        <button onClick={handleSubmit} className={styles.add_btn}>{currentId ? "Update Category" : "Add Category"}</button>
      </div>

      <p className={`${styles.title} text_md`}>Category List</p>

      <div className={styles.add_card}>
        <input className={styles.search_inp} placeholder='Start typing to search for categories' type="text" name="" id="" />

        <table className={styles.table}>
          <tbody>
            <tr className={styles.tr}>
              <th>Category Name</th>
              <th>ID</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
            {fetchedCategory.data?.map((item, id) => {
              return (
                <tr key={id}>
                  <td>{item.categoryName}</td>
                  <td>{item._id}</td>
                  <td>-</td>
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

export default UserComponent