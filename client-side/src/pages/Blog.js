import React from 'react';
import styles from "../styles/pages/Blog.module.scss";
const Blog = () => {
    return (
        <div className={styles.demo}>
            <div className='container' style={{border:"2px solid black"}}>

                <div className={styles.blog_flex}>
                    <div style={{border:"2px solid black" , width:"50%"}}>

                    </div>
                    <div style={{border:"2px solid black" , width:"50%"}}>

                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Blog;