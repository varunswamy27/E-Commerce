import React, { useState } from "react";
import styles from "../styles/pages/LoginSignup.module.scss";

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={styles.login_signup}>
      <div className={styles.login_wrap}>
        <div className={styles.login_img}></div>
        <div className={styles.login_form}>
          <div className={styles.login_box}>
            {isSignUp ? <p>Login</p> : <p>Sign Up</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
