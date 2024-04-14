import { useContext } from "react";
import {  FaGoogle, FaTwitter } from "react-icons/fa";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { ContextAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const currentLocation = useLocation()
    console.log(currentLocation);
const  navigate =  useNavigate()
    const {logIn, loginWithGoogle, loginWithTwiter} = useContext(ContextAuth)

const googleLogin = ()=> {
    loginWithGoogle()
    .then(result => {
        console.log(result);
        navigate(currentLocation.state)
    })
    .catch(error => {
        toast.error(error.message)
    })
}


const twiterLogin = ()=> {
    loginWithTwiter()
    .then(result => {
        console.log(result);
        navigate(currentLocation.state)
    })
    .catch(error => {
        toast.error(error.message)
    })
}

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
logIn(email, password)
.then(result => {
    console.log(result);
 navigate(currentLocation.state)
})
.catch(error => {
    console.log(error.message);
    toast.error('Invalid email or password')
})
    }
    return (
        <div  className="login-bg h-[720px] md:h-[550px] flex items-center rounded-lg mt-8 ">
    <Helmet>
        <title> DreamSpace | LogIn </title>
    </Helmet>
    <ToastContainer></ToastContainer>
<div  className="w-[94%] md:w-[82%] mx-auto bg-white   h-[84%] my-auto grid md:grid-cols-3 rounded-3xl">

<div className="login-title  bg-[#357488] rounded-t-3xl md:rounded-r-none  md:rounded-l-3xl pl-4 pt-4">
<h1 className="font-bold  font-playFair text-lg text-[#]">Dream<span className="text-[#54CAE3]">Space</span></h1>
<div  className="flex mt-2 mb-4  text-center " >
<p   className="bg-black w-10 h-1" ></p>
<p  className="bg-orange-500 w-10 h-1" ></p>



</div>


<div >

<div className="m-auto  md:mt-[45%]">

<h1 className="text-white animate__animated animate__fadeInLeft font-bold text-3xl font-playFair">  Log In Now! </h1>


<p data-aos="fade-up-right" data-aos-duration="2000"  data-aos-delay="1000" className="text-gray-300 mb-4 md:mb-0">To keep conneted with us please 
login with your personal info</p>
</div>


</div>
</div>

<div  data-aos="flip-left"
data-aos-duration="3000"  
data-aos-delay="1500"

className="login-main md:col-span-2 rounded-b-3xl  md:rounded-l-none md:rounded-r-3xl  bg-[#D9D9D9]">

<h1  className=" font-bold text-2xl font-workSense text-orange-500 text-center mt-4 md:mt-12"> Log into DreamSpace </h1>
<form onSubmit={handleSubmit} className="text-center p-4 md:p-0 mt-4"> 

<input name="email" type="email" placeholder="Type Here Your Email" className="input  input-bordered bg-transparent rounded-full border-2 border-[#000000]  w-full max-w-[80%] sm:max-w-[70%] md:max-w-xs placeholder-black" />


<input name="password" type="password" placeholder="Type Your Password" className="input  input-bordered bg-transparent rounded-full border-2 border-[#000000] mt-6 w-full max-w-[80%] sm:max-w-[70%] md:max-w-xs placeholder-black" />
<br />

<input type="submit" value="Log In" className="btn w-full bg-orange-500 text-white max-w-[80%] sm:max-w-[70%] md:max-w-xs  rounded-full  hover:bg-orange-600 mt-6" />
<br />


</form>

<div className="text-center ">

<p className="mt-2 font-bold font-workSense">Or log In with</p>

<button onClick={googleLogin} className="btn bg-[#357488] md:max-w-xs rounded-full hover:bg-[#4595ae] mt-2 text-white md:px-10 mr-3" > <FaGoogle></FaGoogle>  Goggle </button>
<button onClick={twiterLogin} className="btn btn-outline mt-4 md:px-10 ml-3 max-w-xs rounded-full">  <FaTwitter></FaTwitter></button>
</div>

<p className="mt-4  text-center font-workSense pb-8"> Don't Have any account? <Link to={'/registar'} className="text-orange-500 font-bold underline">Registar</Link> </p>  

</div>


    </div>
        </div>
    );
};

export default Login;