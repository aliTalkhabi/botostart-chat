import React, { Children, useEffect, useState } from 'react';
import { auth } from '../services/firebase';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const AuthContext = React.createContext();

const AuthContextProvider = ({children}) => {
    //show loading
    const [loading,setLoading] = useState(true);
    //get data about user
    const [user,setUser] = useState(false);
    // handle navigate browser
    const history = useHistory()
    useEffect(()=>{
        // when the user is authenticated recive info from user and set
        auth.onAuthStateChanged(user=>{
            setUser(user);
            setLoading(false);
            if (user) history.push("/chats");
        })
    },[user,history])
    return (
        <AuthContext.Provider value={user}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;