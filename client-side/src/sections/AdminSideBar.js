import React from 'react';
import styles from "../styles/sections/AdminSideBar.module.scss";

const AdminSideBar = () => {
  return (
    <div className={styles.main_side}>
        <p className={`${styles.title} text_sm`}>ADMIN PANEL</p>
        <p className={`${styles.item_title} text_sm`}>User</p>
        <p className={`${styles.item_title} text_sm`}>Category</p>
        <p className={`${styles.item_title} text_sm`}>Sub-Category</p>
        <p className={`${styles.item_title} text_sm`}>Products</p>
    </div>
  )
}

export default AdminSideBar