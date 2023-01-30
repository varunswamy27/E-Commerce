import React from 'react';
import styles from "../styles/sections/AdminSideBar.module.scss";
import { useState } from 'react';

const AdminSideBar = ({setTabId}) => {



  return (
    <div className={styles.main_side}>
        <p className={`${styles.title} text_sm`}>ADMIN PANEL</p>
        <p onClick={()=>{setTabId(1)}} className={`${styles.item_title}`}>User</p>
        <p onClick={()=>{setTabId(2)}} className={`${styles.item_title}`}>Category</p>
        <p onClick={()=>{setTabId(3)}} className={`${styles.item_title}`}>Sub-Category</p>
        <p onClick={()=>{setTabId(4)}} className={`${styles.item_title}`}>Products</p>
    </div>
  )
}

export default AdminSideBar