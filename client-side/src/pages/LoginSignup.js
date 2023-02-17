import React, { useEffect, useState } from "react";
import styles from "../styles/pages/LoginSignup.module.scss";
import { FcGoogle } from "react-icons/fc";
import authImg from "../img/home/comman_banner.jpg";
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { signin, signup } from "../action/auth";
import { useNavigate } from "react-router-dom";


// const initialState = { firstName: "", lastName: "", email: "", password: "", phoneNumber: "" }

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", phoneNumber: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signUpMessage = useSelector((state) => state.authReducer)

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (isSignUp) {
  //     dispatch(signup(formData, navigate))
  //   }
  //   else {
  //     dispatch(signin(formData, navigate))

  //   }
  // }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmitIn = (e) => {
    e.preventDefault()
    dispatch(signin(formData, navigate))
  }
  const handleSubmitUp = (e) => {
    e.preventDefault()
    dispatch(signup(formData, navigate));
  }

  useEffect(()=>{
    if(signUpMessage?.message === 'SignUp Successful'){
      setFormData({ ...formData, firstName: "", lastName: "", email: "", password: "", phoneNumber: "" })
      setTimeout(()=>{
        setIsSignUp(true)
      },2000)
    }
  },[signUpMessage])


  const googleSuccess = (res) => {
    // console.log(res)
  }
  const googleFailure = (error) => {
    // console.log(error)
    // console.log("Google Sign In was unsuccessful. Try Again Later")
  }

  return (
    <div className={styles.login_signup}>
      <div className={styles.login_wrap}>
        <div className={styles.login_img}>
          <img className={styles.auth_img} src={authImg} alt="" />
        </div>
        <div className={styles.login_form}>
          <div className={styles.login_box}>
            {isSignUp ? (
              <p className={`${styles.title} text_md`}>
                <span className={styles.log}>Log</span>in
              </p>
            ) : (
              <p className={`${styles.title} text_md`}>
                <span className={styles.sign}>Sign</span> Up
              </p>
            )}
            {isSignUp ? (
              <>
                <div className={`${styles.inp_box_log}`}>
                  <input onChange={handleChange} name="email" type="text" placeholder="Enter Your Email" />
                </div>
                <div className={`${styles.inp_box_log}`}>
                  <input onChange={handleChange} name="password" type="text" placeholder="Enter Your Password" />
                </div>
                <div className={`${styles.btn_log_in}`}>
                  <button onClick={handleSubmitIn}>LOGIN</button>
                </div>
                <div className={`${styles.btn_google}`}>
                  <GoogleLogin
                    clientId="76840538025-kupdrmc2l69mqvkd2616ctctvsl418dq.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <button>
                        Continue with Google
                        <FcGoogle className={styles.google} />
                      </button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                  />
                </div>
                <div className={`${styles.account}`}>
                  <p className="text_xs">
                    Don't have an account
                    <br />
                    <span
                      onClick={() => {
                        setIsSignUp(false);
                      }}
                    >
                      SignUp Here?
                    </span>
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className={`${styles.inp_box_sign}`}>
                  <input onChange={handleChange} name="firstName" type="text" placeholder="Enter Your First Name" />
                </div>
                <div className={`${styles.inp_box_sign}`}>
                  <input onChange={handleChange} name="lastName" type="text" placeholder="Enter Your Last Name" />
                </div>
                <div className={`${styles.inp_box_sign}`}>
                  <input onChange={handleChange} name="email" type="text" placeholder="Enter Your Email" />
                </div>
                <div className={`${styles.inp_box_sign}`}>
                  <input onChange={handleChange} name="password" type="text" placeholder="Enter Your Password" />
                </div>
                <div className={`${styles.inp_box_sign}`}>
                  <input onChange={handleChange} name="phoneNumber" type="text" placeholder="Enter Your Number" />
                </div>
                <div className={`${styles.inp_box_sign}`}>
                  <p className="error">{signUpMessage?.response?.data?.message}</p>
                  <p className="success">{signUpMessage?.message === "SignUp Successful" ? signUpMessage?.message : null}</p>
                </div>
                <div className={`${styles.btn_sign_up}`}>
                  <button onClick={handleSubmitUp}>SIGN UP</button>
                </div>
                <div className={`${styles.btn_google}`}>
                  <GoogleLogin
                    clientId="76840538025-kupdrmc2l69mqvkd2616ctctvsl418dq.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <button>
                        Continue with Google
                        <FcGoogle className={styles.google} />
                      </button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                  />
                </div>
                <div className={`${styles.account}`}>
                  <p className="text_xs">
                    Already have an account
                    <br />
                    <span
                      onClick={() => {
                        setIsSignUp(true);
                      }}
                    >
                      Login Here!
                    </span>
                  </p>
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
