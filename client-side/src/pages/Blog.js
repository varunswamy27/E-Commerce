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
                    <div className={styles.grids}>
                        <div  className={styles.bg_img_one}>
                            {/* Bg image */}
                        </div>
                        <div className={styles.grid_sec_two}>

                            <p className={styles.grid_top_calender}><span><BiCalendar /></span> 23 April 2020</p>
                            <p className={styles.grid_heading}>The Recipe from a Winemaker’s Restaurent</p>
                            <p className={styles.grid_para}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <button className={styles.blog_grid_button}> Continue <BiRightArrowAlt /> </button>
                        </div>

                    </div>

                    <div  className={styles.grids}>

                        <div className={styles.bg_img_two}>
                            {/* Bg image */}
                        </div>
                        <div className={styles.grid_sec_two}>
                            <p className={styles.grid_top_calender}><span><BiCalendar /></span> 23 April 2020</p>
                            <p className={styles.grid_heading}>The Recipe from a Winemaker’s Restaurent</p>
                            <p className={styles.grid_para}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <button className={styles.blog_grid_button}> Continue <span className={styles.arrow_sign}> <BiRightArrowAlt /></span> </button>
                        </div>
                    </div>
                </div>

                <div className={styles.blog_flex}>
                    <div className={styles.grids}>
                        <div className={styles.bg_img_three}>
                            {/* Bg image */}
                        </div>
                        <div  className={styles.grid_sec_two}>

                            <p className={styles.grid_top_calender}><span><BiCalendar /></span> 23 April 2020</p>
                            <p className={styles.grid_heading}>The Recipe from a Winemaker’s Restaurent</p>
                            <p className={styles.grid_para}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <button className={styles.blog_grid_button}> Continue <BiRightArrowAlt /> </button>
                        </div>

                    </div>

                    <div className={styles.grids}>

                        <div className={styles.bg_img_four}>
                            {/* Bg image */}
                        </div>
                        <div  className={styles.grid_sec_two}>
                            <p className={styles.grid_top_calender}><span><BiCalendar /></span> 23 April 2020</p>
                            <p className={styles.grid_heading}>The Recipe from a Winemaker’s Restaurent</p>
                            <p className={styles.grid_para}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <button className={styles.blog_grid_button}> Continue <span className={styles.arrow_sign}> <BiRightArrowAlt /></span> </button>
                        </div>
                    </div>
                </div>

                <div className={styles.blog_flex}>
                    <div className={styles.grids}>
                        <div  className={styles.bg_img_five}>
                            {/* Bg image */}
                        </div>
                        <div  className={styles.grid_sec_two}>

                            <p className={styles.grid_top_calender}><span><BiCalendar /></span> 23 April 2020</p>
                            <p className={styles.grid_heading}>The Recipe from a Winemaker’s Restaurent</p>
                            <p className={styles.grid_para}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <button className={styles.blog_grid_button}> Continue <BiRightArrowAlt /> </button>
                        </div>
                    </div>

                    <div className={styles.grids}>
                        <div  className={styles.bg_img_six}>
                            {/* Bg image */}
                        </div>
                        <div  className={styles.grid_sec_two}>
                            <p className={styles.grid_top_calender}><span><BiCalendar /></span> 23 April 2020</p>
                            <p className={styles.grid_heading}>The Recipe from a Winemaker’s Restaurent</p>
                            <p className={styles.grid_para}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <button className={styles.blog_grid_button}> Continue <span className={styles.arrow_sign}> <BiRightArrowAlt /></span> </button>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    );
};

export default Blog;