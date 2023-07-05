import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
//styles
import styles from "../components/Chats.module.css";
//components
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { auth } from "../services/firebase";
import { ChatEngine } from "react-chat-engine";
//context
import { AuthContext } from "../context/AuthContext";

const Chats = () => {
  const [loading, setLoading] = useState(true);

  const user = useContext(AuthContext);
  //logout button
  const history = useHistory();
  // handle data about user
  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    axios
      .get("https://api.chatengine/user/me", {
        headers: {
          "project-id": "82e3fe59-500d-4c7a-8dd1-986dce5c2db4",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFiles(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          //send all of data about user
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "9bb512aa-8096-4bf8-a50e-4ac72da7a76e",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);
  // upload image profile
  const getFiles = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };
  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };
  // loading
  if (!user || loading) return "Loading...";

  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />

      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="82e3fe59-500d-4c7a-8dd1-986dce5c2db4"
        uesrName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
