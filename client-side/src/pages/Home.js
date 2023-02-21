import React from "react";
import BannerTag from "../components/BannerTag";
import Desire from "../components/Desire";
import ProductCircle from "../components/ProductCircle";
import CommanBanner from "../components/CommanBanner";
import styles from "../styles/pages/Home.module.scss";
import ProductListingSec from "../components/ProductListingSec";
import ClientSlider from "../components/ClientSlider";
import Footer from "../components/Footer";


const Home = () => {

  let user = JSON.parse(localStorage.getItem('profile'))
  console.log(user.result.isAdmin)

  return (
    <div className={styles.home_page}>
      <CommanBanner title="Home" />
      <BannerTag />
      <Desire />
      <ProductCircle />
      <ProductListingSec />
      <ClientSlider />
      <ProductListingSec />
      <Footer />
    </div>
  );
};

export default Home;
