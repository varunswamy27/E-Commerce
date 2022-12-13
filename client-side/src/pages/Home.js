import React from "react";
import BannerTag from "../components/BannerTag";
import Desire from "../components/Desire";
import ProductCircle from "../components/ProductCircle";
import styles from "../styles/pages/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home_page}>
      <BannerTag />
      <Desire />
      <ProductCircle />
    </div>
  );
};

export default Home;
