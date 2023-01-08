import React from "react";
import styles from "../styles/pages/Contact.module.scss";
import CommanBanner from "../components/CommanBanner";
import Footer from "../components/Footer";

function Contact() {



  return (
    <section>
      <CommanBanner title="Contact Us" />
      <div className={`${styles.contact_main} section_spacing`}>
        <div className="container">
          <div className={styles.contact_wrap}>
            <div className={styles.map_box}>
              <iframe title="Beer Cafe" width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.513725598569!2d72.83355721421431!3d19.172751653907948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6589c407ef1%3A0xe93d015f26a2d490!2sThe%20Beer%20Cafe!5e0!3m2!1sen!2sin!4v1673189134159!5m2!1sen!2sin"></iframe>           
              </div>
            <div className={styles.contact_form}>
            <p className="text_reg">Contact Us</p>
            <div className={styles.input_box}>
              <label htmlFor="name" className="">Full Name</label>
              <br/>
              <input type="text" id="name" placeholder="Name"/>
            </div>
            <div className={styles.input_box}>
              <label htmlFor="email" className="">Email Address</label>
              <br/>
              <input type="text" id="email" placeholder="Email"/>
            </div>
            <div className={styles.input_box}>
              <label htmlFor="subject" className="">Subject</label>
              <br/>
              <input type="text" id="subject" placeholder="Subject"/>
            </div>
            <div className={styles.input_box}>
              <label htmlFor="message" className="">Message</label>
              <br/>
              <textarea type="text" id="message" placeholder="Message"/>
            </div>
            <button>Send Message</button>
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </section>
  );
}

export default Contact;
