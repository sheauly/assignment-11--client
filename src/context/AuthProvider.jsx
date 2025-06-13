import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // console.log(user, loading)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (updatedData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updatedData)
            .then(() => auth.currentUser.reload()) 
            .then(() => {
                setUser(auth.currentUser); 
                setLoading(false);
            });
    }
    

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe()
        }
    }, [])
    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;