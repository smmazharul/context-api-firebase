import { Children, createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,SetLoading]=useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const profileUpdate = (displayName) => {
        return updateProfile(auth.currentUser, { displayName });
  }
  
  const logOut = () => {
    return signOut(auth)
  }

  
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, presentUser => {
      console.log("auth state change", unSubscribe)
      setUser(presentUser);
      SetLoading(false)
    })
    return () => {
      unSubscribe();
    } 
    },[])

    const authInfo = {
      user,
      loading,
      createUser,
      signInUser,
      profileUpdate,
      logOut,
      
    };


  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
