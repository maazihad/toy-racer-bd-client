import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = () => {

   const [user, setUser] = useState(null);


   return (
      <div>

      </div>
   );
};

export default AuthProvider;