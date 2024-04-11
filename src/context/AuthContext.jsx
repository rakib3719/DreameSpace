
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';


export const ContextAuth = createContext(null)



const AuthContext = ({children}) => {

  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState({})
// all authentication

const SignUp = (email, password)=>{
setLoader(true)
return createUserWithEmailAndPassword(auth, email, password)
}
const logIn = (email, password)=> {


  setLoader(true)
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


const authInfo = {SignUp, logIn, loader, user, logOut, updatesProfile}

// all authentication

// if(loader){
//   return <div 
//   className='flex justify-center items-center h-svh'
//   ><span className="loading loading-bars loading-xs"></span>
//   <span className="loading loading-bars loading-sm"></span>
//   <span className="loading loading-bars loading-md"></span>
//   <span className="loading loading-bars loading-lg"></span></div>
// }

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