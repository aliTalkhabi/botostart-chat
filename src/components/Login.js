import React from "react";
//styles
import google from "../assets/google.svg";
import styles from "../components/Login.module.css";
const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>Welcome To ChatApp !</h2>
        <div className={styles.button}>
          <img src={google} alt="google" /> SignIn with Googlr
        </div>
      </div>
    </div>
  );
};

export default Login;
