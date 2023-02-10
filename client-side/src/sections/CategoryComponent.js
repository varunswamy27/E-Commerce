import React from 'react';
import styles from '../styles/sections/CommanModel.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryData, createCategory } from '../action/categoryAction';

const CategoryComponent = () => {

    const [categoryData, setCategoryData] = useState({ categoryName: "", categoryDescription: "" })


    const fetchedCategory = useSelector((state) => state.fetchAllCategory);
    const createdCategory = useSelector((state) => state.createNewCategory)


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryData())
    }, [createdCategory])


    // const addCategory = () => {
    //     axios.post('http://localhost:3000/add-category', { categoryName, categoryDescription })
    //         .then(function (response) {
    //             console.log(response.data.message);
    //             setMessaage({ success: response.data.message })
    //         })
    //         .catch(function (error) {
    //             console.log(error.response.data.message);
    //             setMessaage({ error: error.response.data.message })
    //         })
    // }

    const addCategory = (e) => {
        e.preventDefault();
        dispatch(createCategory(categoryData))
    }



    return (
        <section className={styles.comman_model_main_section}>
            <p className={`${styles.title} text_md`}>Add Category</p>
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
                {createdCategory === "Category Successfully Created" ? <p className={styles.success}>{createdCategory}</p> : <p className={styles.error}>{createdCategory}</p>}
                <button onClick={addCategory} className={styles.add_btn}>Add Category</button>
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
                                        <button className={styles.delete_btn}>Delete</button>
                                        <button className={styles.edit_btn}>Edit</button>
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

export default CategoryComponent