
import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';


export const ContextAuth = createContext(null)



const AuthContext = ({children}) => {



  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState({})
// all authentication

const googleProvider = new GoogleAuthProvider()
const twiterProvider = new TwitterAuthProvider()

const loginWithGoogle = ()=> {

   return signInWithPopup(auth, googleProvider)
}

const loginWithTwiter= ()=> {
  return signInWithPopup(auth, twiterProvider)
}

const SignUp = (email, password)=>{
return createUserWithEmailAndPassword(auth, email, password)
}
const logIn = (email, password)=> {


  
  return signInWithEmailAndPassword(auth, email, password)
}


const logOut = ()=> {
  signOut(auth)
}

const updatesProfile = (name, photo)=> {

return  updateProfile(auth.currentUser, {
    displayName:name, photoURL:photo
  })
  
 
}
useEffect(()=> {

  const unSubscribe =  onAuthStateChanged(auth, (currentUser)=> {
     setUser(currentUser)
     setLoader(false)
 })
 
 return ()=> {
     unSubscribe()
 }
    }, [])


const authInfo = {SignUp, logIn, loader, user, logOut, updatesProfile, loginWithGoogle, loginWithTwiter}

// all authentication

    return (
  <ContextAuth.Provider value={authInfo}  >
{children}

  </ContextAuth.Provider>
    );
};

AuthContext.propTypes = {
    
    children: PropTypes.node
};

export default AuthContext;