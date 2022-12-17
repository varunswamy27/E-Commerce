import React from "react";
import BannerTag from "../components/BannerTag";
import Desire from "../components/Desire";
import ProductCircle from "../components/ProductCircle";
import CommanBanner from "../components/CommanBanner";
import styles from "../styles/pages/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home_page}>
      <CommanBanner title="Home" />
      <BannerTag />
      <Desire />
      <ProductCircle />
    </div>
  );
};

export default Home;
