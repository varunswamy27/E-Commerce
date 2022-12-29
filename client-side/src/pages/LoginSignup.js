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
            {isSignUp ? (
              <>
                <div>
                  <input type="text" placeholder="Enter Your Email" />
                </div>
                <div>
                  <input type="text" placeholder="Enter Your Password" />
                </div>
                <div>
                  <button>Log In</button>
                </div>
                <div>
                  <p>Don't have an account <span onClick={()=>{setIsSignUp(false)}}>SignUp Here?</span></p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <input type="text" placeholder="Enter Your First Name" />
                </div>
                <div>
                  <input type="text" placeholder="Enter Your Last Name" />
                </div>
                <div>
                  <input type="text" placeholder="Enter Your Email" />
                </div>
                <div>
                  <input type="text" placeholder="Enter Your Password" />
                </div>
                <div>
                  <input type="text" placeholder="Enter Your Number" />
                </div>
                <div>
                  <button>Sign Up</button>
                </div>
                <div>
                  <p>Already have an account <span onClick={()=>{setIsSignUp(true)}}>Login Here!</span></p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
