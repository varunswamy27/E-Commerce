import React from 'react';
import styles from '../styles/pages/Admin.module.scss';
import CommanBanner from '../components/CommanBanner';
import AdminSideBar from '../sections/AdminSideBar';
import { useState } from 'react';
import CategoryComponent from '../sections/CategoryComponent';

const Admin = () => {

    const [tabId, setTabId] = useState(1);
    console.log(tabId);

    return (
        <div style={{ height: "2000px" }}>
            <CommanBanner title="Admin Panel" />
            <div className={styles.admin_main}>
                <div className={styles.side_nav}>
                    <AdminSideBar setTabId={setTabId} />
                </div>
                <div className={styles.admin_content}>
                    <div className={`${styles.container} section_spacing`}>
                        <div className={tabId === 1 ? styles.admin_tab_content : styles.hidden}>
                            <CategoryComponent />
                        </div>
                        <div className={tabId === 2 ? styles.admin_tab_content : styles.hidden}>
                            <p>Tab Content 2</p>
                        </div>
                        <div className={tabId === 3 ? styles.admin_tab_content : styles.hidden}>
                            <p>Tab Content 3</p>
                        </div>
                        <div className={tabId === 4 ? styles.admin_tab_content : styles.hidden}>
                            <p>Tab Content 4</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin