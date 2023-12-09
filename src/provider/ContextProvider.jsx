/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const ContextProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);
    const axiosPublic = useAxiosPublic();

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userLogin = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const userProfileUpdate = (name,photo) =>{
        updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo,
        })
    }

    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentuser=>{
            setUser(currentuser);
            // if(currentuser){
            //     const userInfo = { email : currentuser.email };
            //     axiosPublic.post('/jwt',userInfo)
            //     .then(res=>{
            //          if(res.data.token){
            //              localStorage.setItem('access-token',res.data.token);
            //              setLoading(false);
            //          }
            //     })
            // }
            // else{
            //     localStorage.removeItem('access-token');
            //     setLoading(false);
            // } 
        });
        return () =>{
            return unSubscribe();
        }
    },[])



    const authInfo = {user,loading,createUser,userLogin,userProfileUpdate,googleLogin,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;