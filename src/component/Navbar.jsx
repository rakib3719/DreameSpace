import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ContextAuth } from "../context/AuthContext";
import { FaUser } from "react-icons/fa"


const Navbar = () => {

const {user, logOut} = useContext(ContextAuth)
console.log(user)
const logOutHandle = ()=>{
  logOut()
  .then(result => {
    console.log(result)
    .catch(error => {alert(error.message)})
  })
}
    const nav = <div className="md:flex text-lg font-poppins">
    
<li>    <NavLink  to='/' >  Home </NavLink></li>
<li>    <NavLink  to='/update_profile' >  Update Profile </NavLink> </li>
<li>    <NavLink  to='/about' >  About Us </NavLink></li>
    </div>
    return (
        <div>
         <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {nav}
      </ul>
    </div>
    <a className="btn btn-ghost  text-[16px] sm:text-2xl font-bold font-playFair">  DreamSpace </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

        {nav}
    </ul>
  </div>

  <div>

   
  </div>
  <div className="navbar-end flex items-center">

    {

      user && <div>
      <div className="tooltip tooltip-bottom mr-4" data-tip={user.displayName} >
      
      {
        user.photoURL ?       <img src={user.photoURL} className="w-10 sm:w-12 mt-2 rounded-full h-10 sm:h-12 border-2 border-orange-600" alt="" /> :<FaUser className="sm:text-3xl " ></FaUser> 
      }
      </div>
          </div>
    }
    {

      user &&  <Link onClick={logOutHandle} className="btn text-white bg-orange-500"> 
      Log out </Link>  
    }

    {

      !user && <Link  to='/login' className="btn text-white bg-orange-500"> 
      Log in </Link>

    }


  </div>
</div>
        </div>
    );
};

export default Navbar;