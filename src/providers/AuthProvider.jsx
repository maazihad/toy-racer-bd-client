import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();
const goggleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, goggleProvider);
   };
   const githubSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
   };


   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
         if (currentUser && currentUser.email) {
            const loggedUser = {
               email: currentUser?.email
            };

            fetch('http://localhost:5555/jwt', {
               method: 'POST',
               headers: {
                  'content-type': 'application/json'
               },
               body: JSON.stringify(loggedUser)
            })
               .then(res => res.json())
               .then(data => {
                  localStorage.setItem('my-toys-access-token', data.token);
               });
         }
         else {
            localStorage.removeItem('car-doctor-access-token');
         }
      });
      return () => {
         return unSubscribe;
      };
   }, []);

   const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      googleSignIn,
      githubSignIn,
      logOut,
   };

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;