import React from 'react';
import styles from "../styles/sections/AdminSideBar.module.scss";
import { useState } from 'react';

const AdminSideBar = ({ setTabId, tabId }) => {

  return (
    <div className={styles.main_side}>
      <p className={`${styles.title} text_sm`}>ADMIN PANEL</p>
      <p onClick={() => { setTabId(1) }} className={`${styles.item_title} ${tabId === 1 ? styles.active : ''}`}>User</p>
      <p onClick={() => { setTabId(2) }} className={`${styles.item_title} ${tabId === 2 ? styles.active : ''}`}>Category</p>
      <p onClick={() => { setTabId(3) }} className={`${styles.item_title} ${tabId === 3 ? styles.active : ''}`}>Sub-Category</p>
      <p onClick={() => { setTabId(4) }} className={`${styles.item_title} ${tabId === 4 ? styles.active : ''}`}>Products</p>
    </div>
  )
}

export default AdminSideBar;