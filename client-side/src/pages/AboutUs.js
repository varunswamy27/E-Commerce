import React from "react";
import styles from "../styles/pages/AboutUs.module.scss";
import CommanBanner from "../components/CommanBanner";
import BannerTag from "../components/BannerTag";
import Desire from "../components/Desire";
import ProductCircle from "../components/ProductCircle";
import ClientSlider from "../components/ClientSlider";
import CounterUp from "../sections/CounterUp";

const AboutUs = () => {
  return (
    <div className={styles.about_us}>
      <CommanBanner title="About Us" />
      <BannerTag />
      <Desire />
      <div className="section_spacing_bottom">
      <ProductCircle />
      </div>
      <ClientSlider />
      <CounterUp />
    </div>
  );
};

export default AboutUs;
