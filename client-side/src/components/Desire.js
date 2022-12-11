import React from "react";
import styles from "../styles/components/Desire.module.scss";
import desire from "../img/home/desire.jpg";

const Desire = () => {
  return (
    <section className={`${styles.desire_section} section_spacing`}>
      <div className="container">
        <div className={styles.desire_wrap}>
          <div className={styles.desire_img}>
            <img src={desire} alt="" />
          </div>
          <div className={styles.desire_info}>
            <p className={styles.year}>Since 1905</p>
            <p className={styles.title}>Desire Meets A New Taste</p>
            <p className={styles.desp}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p className={styles.desp}>
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word "and" and the Little Blind Text should turn around and return
              to its own, safe country.
            </p>
            <p className={styles.exp}><span className={styles.red_text}>115</span> Years of Experience In Business</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desire;
