import React from "react";
//styles
import styles from "../components/Chats.module.css";
//components
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { auth } from "../services/firebase";
import {ChatEngine} from 'react-chat-engine'

const Chats = () => {
    const history = useHistory();
    const logoutHandler = async()=>{
        await auth.signOut();
        history.push("/")
    }
  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />

      <ChatEngine 
        height="calc(100vh - 50px)"
        projectID="82e3fe59-500d-4c7a-8dd1-986dce5c2db4"
        uesrName="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
