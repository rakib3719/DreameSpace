import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const Registar = () => {
    

const {SignUp, updatesProfile} = useContext(ContextAuth)

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const photo = e.target.photo.value
        const name = e.target.name.value


     


 if(password < 6){
      toast.error(" Password should be at least 6 characters");
      return
        }
        if(!/^(?=.*[A-Z])(?=.*[a-z]).+$/.test(password)){
 toast.error("Password Must have a Lowercase and a Uppercase letter");
 return
        }

SignUp(email, password)
.then(result => {
console.log(result)
updatesProfile(name, photo)
.then(() => {
    // Profile updated!
    // ...
  }).catch((error) => {
  console.log(error);
  });
toast("Registration Successfully")

})
.catch(error => {
   
    toast.error(error.message)
})



        
    }
    return (
        <div  className="registar-bg h-[800px] md:h-[600px] flex items-center rounded-lg mt-8 ">
        <ToastContainer></ToastContainer>
        <Helmet>
            

            <title> DreamSpace | Registar </title>
        </Helmet>
        <div  className="w-[94%] md:w-[82%] mx-auto bg-white   h-[84%] my-auto grid md:grid-cols-3 rounded-3xl">
        
        <div className="login-title  bg-[#357488] rounded-t-3xl md:rounded-r-none  md:rounded-l-3xl pl-4 pt-4">
        <h1 className="font-bold font-playFair text-lg text-[#]">Dream<span className="text-[#54CAE3]">Space</span></h1>
        <div  className="flex mt-2 mb-4  text-center " >
        <p   className="bg-black w-10 h-1" ></p>
        <p  className="bg-orange-500 w-10 h-1" ></p>
        
        
        
        </div>
        
        
        <div >
        
        <div className="m-auto  md:mt-[45%]">
        
        <h1  className="text-white font-bold text-3xl font-playFair">  Registar Now! </h1>
        
        
        <p  className="text-gray-300 mb-4 md:mb-0">To keep conneted with us please 
       Registar with your personal info</p>
        </div>
        
        
        </div>
        </div>
        
        <div className="login-main md:col-span-2 rounded-b-3xl  md:rounded-l-none md:rounded-r-3xl  bg-[#D9D9D9]">
        
        <h1  className=" font-bold text-2xl font-workSense text-orange-500 text-center mt-4 md:mt-12"> Registar into DreamSpace </h1>
        <form onSubmit={handleSubmit} className="text-center p-4 md:p-0 mt-4"> 

  
        <input name="name" type="text" placeholder="Type Here Your Name" className="input  input-bordered bg-transparent rounded-full border-2 border-[#000000]  w-full max-w-[80%] sm:max-w-[70%] md:max-w-xs placeholder-black" required />




        
        <input name="email" type="email" placeholder="Type Here Your Email" className="input  input-bordered bg-transparent rounded-full border-2 border-[#000000] mt-6 w-full max-w-[80%] sm:max-w-[70%] md:max-w-xs placeholder-black" required />
        

        <input name="photo" type="text" placeholder="Drop Your photo URL" className="input  input-bordered bg-transparent rounded-full border-2 border-[#000000] mt-6 w-full max-w-[80%] sm:max-w-[70%] md:max-w-xs placeholder-black" />


        
        <input name="password" type="password" placeholder="Type Your Password" className="input  input-bordered bg-transparent rounded-full border-2 border-[#000000] mt-6 w-full max-w-[80%] sm:max-w-[70%] md:max-w-xs placeholder-black" required />
        <br />
        
        <input type="submit" value="Registar" className="btn w-full bg-orange-500 text-white max-w-[80%] sm:max-w-[70%] md:max-w-xs  rounded-full  hover:bg-orange-600 mt-6" />
        <br />
        
        
        </form>
        
      
        
        <p className="mt-4  text-center font-workSense pb-8"> Already Have an account? <Link to='/login' className="text-orange-500 font-bold underline">Log In</Link> </p>  
        
        </div>
        
        
            </div>

        
                </div>
    );
};

export default Registar;