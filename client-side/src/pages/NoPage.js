import React from 'react';
import styles from '../styles/pages/NoPage.module.scss';

const NoPage = () => {
  return (
    <section className={styles.NoPage_section}>
        <div className={styles.main_nopage}>
            <p>404 No Page Found</p>
        </div>
    </section>
  )
}

export default NoPage