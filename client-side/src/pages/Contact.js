import React from "react";
import styles from "../styles/pages/Contact.module.scss";
import { request, gql } from "graphql-request";
import { useEffect, useState } from "react";

function Contact() {

  useEffect(() => {
    const query = gql`
      {
        products {
            title
            titleInner
            description
            productWhoIsItFor {
              whoIsItFor
            }
            productBenefits {
              benefits
            }
            productFlavour {
              flavourName
              flavourColor {
                hex
              }
              flavourIcon {
                url
              }
            }
            productCategory
            whoIsItForCategory
            productIngredient
            productAilment
          }
      }
    `;
    request(
      "https://api-ap-south-1.hygraph.com/v2/clc8pgeaz14ra01t803km6gnx/master",
      query
    ).then((data) => console.log(data));
  }, []);


  return (
    <div className={styles.contact_page}>
      <h1>This is contact page</h1>
    </div>
  );
}

export default Contact;
