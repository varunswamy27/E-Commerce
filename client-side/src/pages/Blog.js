import React from 'react';
import styles from "../styles/pages/Blog.module.scss";
import img1 from "../img/blog/image_1.jpg"
import { BiCalendar } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";

const Blog = () => {
    return (


        <section className={styles.blog_section}>

            <div className={`${styles.container_sec} container`} >

                <div className={styles.blog_flex}>


                    <div style={{ border: "2px solid black" }} className={styles.grids}>
                        <div style={{ border: "2px solid black" }}>
                            <img src={img1} alt='wines' />
                        </div>
                        <div style={{ border: "2px solid black" }} className={styles.grid_sec_two}>

                            <p className={styles.grid_top_calender}><span><BiCalendar /></span> 23 April 2020</p>
                            <p className={styles.grid_heading}>The Recipe from a Winemaker’s Restaurent</p>
                            <p className={styles.grid_para}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <button> continue <BiRightArrowAlt /> </button>
                        </div>

                    </div>

                    <div style={{ border: "2px solid black" }} className={styles.grids}>



                    </div>


                </div>







            </div>
        </section>
    );
};

export default Blog;