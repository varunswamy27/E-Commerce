import React from 'react';
import styles from '../styles/sections/CommanModel.module.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryData, createCategory, removeCategory, modifyCategory } from '../action/categoryAction';
import { getSubCategoryData, createSubCategory, modifySubCategory } from '../action/subCategoryAction';

const SubCategoryComponent = () => {
    const [subCategoryData, setSubCategoryData] = useState({ subCategoryName: "", subCategoryDescription: "", categoryId: "" })
    const [currentId, setCurrentId] = useState(null);

    const fetchedCategory = useSelector((state) => state.fetchAllCategory);

    const fetchedSubCategory = useSelector((state) => state.fetchAllSubCategory);
    const fetchedSubCategoryInput = useSelector((state) => state.fetchAllSubCategory);
    const createdSubCategory = useSelector((state) => state.createNewSubCategory)
    const deletedSubCategory = useSelector((state) => state.removeSelectedCategory);
    const updatedSubCategory = useSelector((state) => state.modifySelectedSubCategory);
    const populatedSubCategory = currentId ? fetchedSubCategoryInput.data?.find((p) => p._id === currentId) : null


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubCategoryData())
    }, [createdSubCategory, deletedSubCategory, currentId, dispatch])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(modifySubCategory(currentId, subCategoryData));
        }
        else {
            dispatch(createSubCategory(subCategoryData))
        }
    }


    useEffect(() => {
        if (populatedSubCategory) {
            setSubCategoryData({ subCategoryName: populatedSubCategory.subCategoryName, subCategoryDescription: populatedSubCategory.subCategoryDescription, categoryId: populatedSubCategory.categoryId._id })
        }
        else {
            return;
        }
    }, [populatedSubCategory])

    return (
        <section className={styles.comman_model_main_section}>
            <p id='subcatBox' className={`${styles.title} text_md`}>{currentId ? "Edit Category" : "Add Sub-Category"}</p>
            <div className={styles.add_card}>
                <div className={styles.input_box}>
                    <label htmlFor="">SubCategory Name:</label>
                    <input onChange={(e) => setSubCategoryData({ ...subCategoryData, subCategoryName: e.target.value })} value={subCategoryData.subCategoryName} type="text" name='categoryName' placeholder='Enter SubCategory' />
                    {subCategoryData.categoryName === " " ?
                        <p className={styles.fielderror}>Enter Category Field</p>
                        :
                        null
                    }
                </div>
                <div className={styles.input_box}>
                    <label htmlFor="">SubCategory Description:</label>
                    <input onChange={(e) => setSubCategoryData({ ...subCategoryData, subCategoryDescription: e.target.value })} value={subCategoryData.subCategoryDescription} type="text" name='categoryDescription' placeholder='Enter SubCategory Description' />
                    {subCategoryData.subCategoryDescription === " " ?
                        <p className={styles.fielderror}>Enter Category Description Field</p>
                        :
                        null
                    }
                </div>
                <div className={styles.input_box}>
                    <label htmlFor="">Category Id:</label>
                    {/* <input onChange={(e) => setSubCategoryData({ ...subCategoryData, categoryId: e.target.value })} value={subCategoryData.categoryId} type="text" name='categoryId' placeholder='Enter Category Id' /> */}
                    <select onChange={(e) => setSubCategoryData({ ...subCategoryData, categoryId: e.target.value })}>
                        <option selected={false} disabled="disabled">Select a Category</option>
                        {fetchedCategory?.data?.map((item, id) => {
                            return (
                                <option key={id} value={item._id}>{item.categoryName}</option>
                            )
                        })}
                    </select>
                    {subCategoryData.categoryId === " " ?
                        <p className={styles.fielderror}>Enter Category Description Field</p>
                        :
                        null
                    }
                </div>
                {createdSubCategory === "SubCategory Successfully Created" || updatedSubCategory ? <p className={styles.success}>{createdSubCategory}{updatedSubCategory}</p> : <p className={styles.error}>{createdSubCategory}</p>}
                <button onClick={handleSubmit} className={styles.add_btn}>{currentId ? "Update SubCategory" : "Add SubCategory"}</button>
            </div>

            <p className={`${styles.title} text_md`}>Sub-Category List</p>

            <div className={styles.add_card}>
                <input className={styles.search_inp} placeholder='Start typing to search for categories' type="text" name="" id="" />

                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.tr}>
                            <th>SubCategory Name</th>
                            <th>ID</th>
                            <th>Category Id</th>
                            <th>Actions</th>
                        </tr>
                        {fetchedSubCategory.data?.map((item, id) => {
                            return (
                                <tr key={id}>
                                    <td>{item.subCategoryName}</td>
                                    <td>{item._id}</td>
                                    <td>{item.categoryId._id}</td>
                                    <td>
                                        <button onClick={() => dispatch(removeCategory(item._id))} className={styles.delete_btn}>Delete</button>
                                        <a href='#subcatBox'><button onClick={() => setCurrentId(item._id)} className={styles.edit_btn}>Edit</button></a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section>)
}

export default SubCategoryComponent