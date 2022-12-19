import React from "react";
import styles from "../styles/components/ClientSlider.module.scss";
import Slider from "react-slick";
import client1 from "../img/home/person_1.jpg";
import client2 from "../img/home/person_2.jpg";
import client3 from "../img/home/person_3.jpg";
import { ImQuotesLeft } from "react-icons/im";

const ClientSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll:  1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className={`${styles.client_slider}`}>
      <div className={styles.overlay}>
        <div className="container section_spacing">
          <div className={styles.head_wrap}>
            <p className={`${styles.small_title} text_xxs`}>Testimonial</p>
            <p className={`${styles.title} text_lg`}>Happy Clients</p>
          </div>
          <div className={styles.slider_wrap}>
            <Slider {...settings}>

              <div className={styles.padd}>
              <div className={styles.client_box}>
                <div className={styles.hyphen}>
                  <ImQuotesLeft />
                </div>
                <p className={`${styles.review} text_xxs`}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ducimus sit labore molestiae repudiandae cupiditate non nihil
                  amet quas quia exercitationem.
                </p>
                <div className={styles.client_info}>
                  <img src={client1} alt="" />
                  <div className={styles.info}>
                    <p className={`${styles.name}`}>Roger Scott</p>
                    <p className={`${styles.profile} text_xxs`}>
                      Marketing Manager
                    </p>
                  </div>
                </div>
              </div>
              </div>

              <div className={styles.padd}>
              <div className={styles.client_box}>
                <div className={styles.hyphen}>
                  <ImQuotesLeft />
                </div>
                <p className={`${styles.review} text_xxs`}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ducimus sit labore molestiae repudiandae cupiditate non nihil
                  amet quas quia exercitationem.
                </p>
                <div className={styles.client_info}>
                  <img src={client2} alt="" />
                  <div className={styles.info}>
                    <p className={`${styles.name}`}>Roger Scott</p>
                    <p className={`${styles.profile} text_xxs`}>
                      Marketing Manager
                    </p>
                  </div>
                </div>
              </div>
              </div>

              <div className={styles.padd}>
              <div className={styles.client_box}>
                <div className={styles.hyphen}>
                  <ImQuotesLeft />
                </div>
                <p className={`${styles.review} text_xxs`}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ducimus sit labore molestiae repudiandae cupiditate non nihil
                  amet quas quia exercitationem.
                </p>
                <div className={styles.client_info}>
                  <img src={client3} alt="" />
                  <div className={styles.info}>
                    <p className={`${styles.name}`}>Roger Scott</p>
                    <p className={`${styles.profile} text_xxs`}>
                      Marketing Manager
                    </p>
                  </div>
                </div>
              </div>
              </div>

              <div className={styles.padd}>
              <div className={styles.client_box}>
                <div className={styles.hyphen}>
                  <ImQuotesLeft />
                </div>
                <p className={`${styles.review} text_xxs`}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ducimus sit labore molestiae repudiandae cupiditate non nihil
                  amet quas quia exercitationem.
                </p>
                <div className={styles.client_info}>
                  <img src={client2} alt="" />
                  <div className={styles.info}>
                    <p className={`${styles.name}`}>Roger Scott</p>
                    <p className={`${styles.profile} text_xxs`}>
                      Marketing Manager
                    </p>
                  </div>
                </div>
              </div>
              </div>
              
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
