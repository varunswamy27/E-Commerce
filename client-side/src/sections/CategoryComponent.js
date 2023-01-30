import React from 'react';
import styles from '../styles/sections/CommanModel.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryComponent = () => {

    const [categoryName, setCategoryName] = useState({});
    const [categoryDescription, setCategoryDescription] = useState({});
    const [Message, setMessaage] = useState({ error: "", success: "" });
    const [empty, setEmpty] = useState(false);



    const addCategory = () => {
        axios.post('http://localhost:3000/add-category', { categoryName, categoryDescription })
            .then(function (response) {
                // handle success
                console.log(response.data.message);
                setMessaage({ success: response.data.message })
            })
            .catch(function (error) {
                // handle error
                console.log(error.response.data.message);
                setMessaage({ error: error.response.data.message })
            })
    }

    return (
        <section className={styles.comman_model_main_section}>
            <p className={`${styles.title} text_md`}>Add Category</p>
            <div className={styles.add_card}>
                <div className={styles.input_box}>
                    <label htmlFor="">Category Name:</label>
                    <input onChange={(e) => setCategoryName(e.target.value)} type="text" placeholder='Enter Category' />
                    {categoryName === "" ?
                        <p className={styles.fielderror}>Enter Category Field</p>
                        :
                        null
                    }
                </div>
                <div className={styles.input_box}>
                    <label htmlFor="">Category Description:</label>
                    <input onChange={(e) => setCategoryDescription(e.target.value)} type="text" placeholder='Enter Category Description' />
                    {categoryDescription === "" ?
                        <p className={styles.fielderror}>Enter Category Description Field</p>
                        :
                        null
                    }
                </div>
                <p className={styles.success}>{Message.success}</p>
                <p className={styles.error}>{Message.error}</p>
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
                        <tr>
                            <td>Demo1</td>
                            <td>Demo2</td>
                            <td>Demo3</td>
                            <td>
                                <button className={styles.delete_btn}>Delete</button>
                                <button className={styles.edit_btn}>Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Demo1</td>
                            <td>Demo2</td>
                            <td>Demo3</td>
                            <td>
                                <button className={styles.delete_btn}>Delete</button>
                                <button className={styles.edit_btn}>Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Demo1</td>
                            <td>Demo2</td>
                            <td>Demo3</td>
                            <td>
                                <button className={styles.delete_btn}>Delete</button>
                                <button className={styles.edit_btn}>Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default CategoryComponent