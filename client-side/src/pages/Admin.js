import React from 'react';
import styles from '../styles/pages/Admin.module.scss';
import CommanBanner from '../components/CommanBanner'
import AdminSideBar from '../sections/AdminSideBar'

const Admin = () => {
    return (
        <div style={{ height: "2000px" }}>
            <CommanBanner title="Admin Panel" />
            <div className={styles.admin_main}>
                <div className={styles.side_nav}>
                    <AdminSideBar />
                </div>
                <div className={styles.admin_content}>
                    
                </div>
            </div>
        </div>
    )
}

export default Admin