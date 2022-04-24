import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "./config";
import { useHistory } from "react-router";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState({
    email:"",
    invalid:""
  })

  //User Authentication
  const signup = (email, password, fullName) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        user.updateProfile({
          displayName: fullName,
        });
        history.push("/")
        // localStorage.setItem('user', JSON.stringify({email: user.user.email, accesstoken: user.user.Aa, uid: user.user.uid}))
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signin = (email, password) =>
    auth.signInWithEmailAndPassword(email, password).then((userCredential => {
      const user = userCredential;
      // console.log(userCredential.user.email)
      // localStorage.setItem('user', JSON.stringify({email: user.user.email, accesstoken: user.user.Aa, uid: user.user.uid}))
    }))
    .catch(error => console.log(error));

  const logout = () => {
    auth.signOut().then(() => {
      setCurrentUser(null)
      history.push("/signin")
    })
  };

  const forgetPassword = (email) => {
    auth.confirmPasswordReset(email);
  }
  //----------------------------------------------------------

  //card data------
  const saveCardData = (data) => {
    db.collection("card")
      .doc(currentUser.uid)
      .set({data})
      .then((doc) => {
        console.log("Document successfully written!", doc);
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  //submitcarddata
  const submitCardData = async(cardData) => {
    try {
      await axios.post("https://sheet.best/api/sheets/26f3f5b4-6481-42ac-8a36-b8c8ca3622cb", cardData) 
    } catch (error) {
      console.log(error);
    }
  }
  
 
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user)
      
    });
    // return unsubscribe;
  }, []);
  
  const value = {
    currentUser,
    signup,
    signin,
    logout,
    saveCardData,
    submitCardData,
    forgetPassword,
   
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
