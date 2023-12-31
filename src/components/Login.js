import React from "react";
import firebase from "firebase/app";
import { auth } from "../services/firebase";
//styles
import google from "../assets/google.svg";
import styles from "../components/Login.module.css";
const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>Welcome To ChatApp !</h2>
        <div
          className={styles.button}
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <img src={google} alt="google" /> SignIn with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
