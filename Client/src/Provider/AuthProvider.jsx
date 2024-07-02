import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import axios from 'axios';

//creating context
export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [UserFromDatabsaae, setUserFromDatabase] = useState(null)
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const singIN = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  }

  useEffect(() => {
    console.log("UserFromDatabase:", UserFromDatabsaae);
  }, [UserFromDatabsaae]);


  useEffect(() => {

    const unSubscribr = onAuthStateChanged(auth, currentUser => 
      {
        const userEmial = currentUser?.email|| user?.email;
        const loggedUser={email: userEmial};
      setUser(currentUser)
      setLoading(false)
      //--------------------------------
      //if user exist then essue a token
      //--------------------------start----------------------
        if(currentUser){
           
          axios.post(`http://localhost:5000/jwt`,loggedUser,{withCredentials:true})
          .then(res=>{
            console.log(res.data)
            console.log('token response',res.data)
          })
        }else{

           axios.post('http://localhost:5000/logout',loggedUser,{
            withCredentials:true
           })
           .then(res=>{
            console.log(res.data)
           })
        }


        ///----------------------END --------------------
      //for user form database
      if (currentUser) {
        axios.get(`http://localhost:5000/user/${currentUser?.email}`)
          .then((response) => {
            // console.log(response.data);
            setUserFromDatabase(response.data[0]);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        // Handle the case where currentUser is null
        setUserFromDatabase(null);
      }



      console.log("Current user", currentUser)
    });
    return () => {
      return unSubscribr();
    }
  }, [])



  const authInfo = {
    user,
    loading,
    createUser,
    singIN,
    logOut,
    setUser,
    UserFromDatabsaae,
    setUserFromDatabase


  }



  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;