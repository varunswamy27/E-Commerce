import React, { useEffect, useState } from "react";
import styles from "../styles/pages/LoginSignup.module.scss";
import { FcGoogle } from "react-icons/fc";
import authImg from "../img/home/comman_banner.jpg";
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { signin, signup } from "../action/auth";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from 'react-loader-spinner'



// const initialState = { firstName: "", lastName: "", email: "", password: "", phoneNumber: "" }

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", phoneNumber: "" });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signUpMessage = useSelector((state) => state.authReducer);

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
    dispatch(signin(formData))
  }
  const handleSubmitUp = (e) => {
    e.preventDefault()
    dispatch(signup(formData));
  }

  useEffect(() => {
    if (signUpMessage?.message === 'SignUp Successful') {
      setFormData({ firstName: "", lastName: "", email: "", password: "", phoneNumber: "" });
      setIsLoading(true)
      setTimeout(() => {
        setIsSignUp(true)
        setIsLoading(false)
      }, 2000)
    }
  }, [signUpMessage])


  const googleSuccess = (res) => {
    // console.log(res)
  }

  const googleFailure = (error) => {
    // console.log(error)
    // console.log("Google Sign In was unsuccessful. Try Again Later")
  }

  console.log(signUpMessage);

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
                  <input onChange={handleChange} value={formData.email} name="email" type="text" placeholder="Enter Your Email" />
                </div>
                <div className={`${styles.inp_box_log}`}>
                  <input onChange={handleChange} value={formData.password} name="password" type="text" placeholder="Enter Your Password" />
                </div>
                <p className="error">{signUpMessage?.response?.data?.message}</p>
                <p className="success">{signUpMessage?.authData?.message === "Login Successful" ? signUpMessage?.authData?.message : null}</p>
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
                  <input onChange={handleChange} name="firstName" value={formData.firstName} type="text" placeholder="Enter Your First Name" />
                </div>
                <div className={`${styles.inp_box_sign}`}>
                  <input onChange={handleChange} name="lastName" value={formData.lastName} type="text" placeholder="Enter Your Last Name" />
                </div>
                <div className={`${styles.inp_box_sign}`}>
                  <input onChange={handleChange} name="email" value={formData.email} type="text" placeholder="Enter Your Email" />
                </div>
                <div className={`${styles.inp_box_sign}`}>
                  <input onChange={handleChange} name="password" value={formData.password} type="text" placeholder="Enter Your Password" />
                </div>
                <div className={`${styles.inp_box_sign}`}>
                  <input onChange={handleChange} name="phoneNumber" value={formData.phoneNumber} type="text" placeholder="Enter Your Number" />
                </div>
                <div className={`${styles.inp_box_sign}`}>
                  <p className="error">{signUpMessage?.response?.data?.message}</p>
                  <p className="success">{signUpMessage?.message === "SignUp Successful" ? signUpMessage?.message : null}</p>
                  {isLoading ?
                    <ProgressBar
                      height="60"
                      width="80"
                      ariaLabel="progress-bar-loading"
                      wrapperStyle={{}}
                      wrapperClass="progress-bar-wrapper"
                      borderColor='#B7472A'
                      barColor='#B7472A'
                    />
                    : null
                  }
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
