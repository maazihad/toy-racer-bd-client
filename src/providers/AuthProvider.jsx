import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

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
   const updateUserProfile = (name, url) => {
      return updateProfile(auth.currentUser, {
         displayName: name, photoURL: url
      });
   };
   const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   };
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      });
      return () => {
         return unSubscribe();
      };
   }, []);


   const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      updateUserProfile,
      googleSignIn,
      logOut,
   };
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;