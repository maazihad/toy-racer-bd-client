import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { app } from '../firebase/firebase.config';

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