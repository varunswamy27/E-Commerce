import React from "react";
import styles from "../styles/components/ClientSlider.module.scss";

const ClientSlider = () => {
  return (
    <section className={`${styles.client_slider}`}>
      <div className={styles.overlay}>
        <div className="container section_spacing">
          <div className={styles.head_wrap}>
            <p className={`${styles.small_title} text_xxs`}>Testimonial</p>
            <p className={`${styles.title} text_lg`}>Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
