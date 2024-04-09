import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";


const Footer = () => {
    return (
        <div className=" bg-[#3B2E2EFC] pb-4 mt-8"  >
           <div   className="w-[90%] max-w-[1420px] mx-auto">





           <footer className=" py-10 text-white gap-8 font-workSense md:flex items-center ">
  
  <aside  className="">
<p  className="text-orange-500 font-bold text-lg font-playFair" >Contact us</p>

<h4  className="text-3xl font-bold font-poppins mt-4" > Get In Touch </h4>

<div  className="flex mt-4 mb-4" >
<p   className="bg-white w-10 h-1" ></p>
<p  className="bg-orange-500 w-10 h-1   " ></p>

</div>
<p  className="text-lg text-white font-workSense w-[90%] ">DreamSpace Realty offers an extensive array of options, regularly refreshed property listings, and market insights to assist you in making informed decisions. It represents a top-tier WordPress theme tailored for real estate, seamlessly blending contemporary elegance with refined simplicity</p>



<div  className="mt-4" >

    <p   className="flex gap-2 items-center text-lg">  <FaPhone  className="text-orange-500"></FaPhone> 01608888888 </p>
    <p   className="flex gap-2 mt-2 items-center text-lg">  <CiMail  className="text-orange-500"></CiMail> bannah76769@gmail.com </p>
</div>



</aside> 











<form className="ml-auto mt-16 md:mt-0        w-[100%]  mx-auto">
<h6 className="btn btn-ghost text-2xl font-bold font-playFair">DreamSpace</h6> 
<fieldset className="form-control w-80">
<label className="label">
<span className="">Subscribe to our Newsletter</span>
</label> 
<div className="join">
<input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
<button className="btn bg-orange-500 border-none join-item">Subscribe</button>
</div>
</fieldset>




</form>







</footer>

<div  className="text-white font-poppins grid grid-cols-3 items-center gap-4">


<div className="left-row">


<p className="bg-[#8D8080] w-[100%] h-1" ></p>
    
</div>


<div className="icon  mx-auto">



<div className="flex gap-4" >

    <FaFacebook></FaFacebook>
    <FaTwitter></FaTwitter>
    <FaInstagram></FaInstagram>
    <FaLinkedin  className="hidden sm:flex"></FaLinkedin>
</div>

</div>


<div className="right-row">
<p className="bg-[#8D8080] w-[100%] h-1 " ></p>

</div>


</div>


           </div>
           <footer className="footer footer-center p-4 mt-4 text-white">
  <aside>
    <p>Copyright © 2024 - All right reserved by DreamSpace Depoloper team</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;