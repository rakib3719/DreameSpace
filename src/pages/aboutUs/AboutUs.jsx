import aboutImg from '../../assets/images/house-isolated-field.jpg'
import { IoHomeSharp } from "react-icons/io5";
import { PiWarehouseBold } from "react-icons/pi";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaRegHandshake } from 'react-icons/fa';
import { IoMdAnalytics } from "react-icons/io";
import { BsFillEasel2Fill } from "react-icons/bs";
import Gallary from '../../component/gallary/Gallary';
import img1 from '../../assets/images/7.jpg';
import img2 from '../../assets/images/images (2).jpeg';
import img3 from '../../assets/images/images.jpeg';
import img4 from '../../assets/images/4.jpg'
import { Helmet } from 'react-helmet-async';
const AboutUs = () => {
    return (
        <div>
<div className="lg:flex gap-4 items-center mt-8 about-bg">

<Helmet>

    <title> DreamSpace | AboutUs </title>
</Helmet>

<div  className="about-left ">

<p  className="text-orange-500 font-workSense">About DreamSpace</p>
<h1 className="font-playFair font-bold text-3xl pt-6"> Who We Are </h1>


<div  className="flex mt-4 mb-4" >
<p   className="bg-blue-800 w-10 h-1" ></p>
<p  className="bg-orange-500 w-10 h-1   " ></p>

</div>

<p className="font-semibold font-workSense">Where Dreams Find Home. We specialize in turning aspirations into addresses, offering expert guidance, personalized service, and innovative solutions. Let us help you find your perfect space today</p>
<br />

<p  className="text-[#666666] font-workSense">At DreamSpace Real Estate, we believe in the power of dreams and the importance of finding the perfect place to call home. Our dedicated team of real estate experts is committed to guiding you through every step of your real estate journey with integrity, transparency, and personalized attention. We combine our in-depth knowledge of the market with innovative technologies to ensure you make informed decisions. Whether you are buying, selling, or investing, trust DreamSpace to turn your real estate dreams into reality.</p>
</div>
<div className="about-right mt-8 lg:mt-0" >

<img src={aboutImg} alt="" />

</div>


</div>

<div className="service-section mt-16">

<div  className='text-center'>
<h1 className='text-3xl font-playFair mt-4 font-bold' >Property Service</h1>
<p  className='text-orange-500 mt-3 font-workSense'>We are Offering the Best Real Estate</p>

<div  className="flex mt-4 mb-4 mx-auto w-[10%]" >
<p   className="bg-blue-800 w-10 h-1 " ></p>
<p  className="bg-orange-500 w-10 h-1   " ></p>
</div>

<div className="serviceCard grid my-16 gap-8 md:grid-cols-2 lg:grid-cols-3">

<div className="cardItem  border-2 p-4 rounded-lg shadow-xl card-bg">
<IoHomeSharp  className=' text-[40px] mx-auto text-center'/>
<h1 className='font-playFair py-2 text-2xl font-bold'> Homes For sale</h1>
<p className=' font-workSense'>Here are the beautiful homes that ared
available for sale.</p>

</div>





<div className="cardItem border-2 p-4 rounded-lg shadow-xl card-bg">
<PiWarehouseBold  className=' text-[40px] mx-auto text-center'/>
<h1 className='font-playFair py-2 text-2xl font-bold'> Homes For Rent</h1>
<p className=' font-workSense'>Comfortable & Luxury homes are
available for rent.</p>

</div>



<div className="cardItem border-2 p-4 rounded-lg shadow-xl card-bg">
<MdOutlineHomeWork className=' text-[40px] mx-auto text-center'/>
<h1 className='font-playFair py-2 text-2xl font-bold'> Homes For Mortgage</h1>
<p className=' font-workSense'>Comfortable & Luxury homes are
available for rent.</p>

</div>


<div className="cardItem border-2 p-4 rounded-lg shadow-xl card-bg">
<FaRegHandshake className=' text-[40px] mx-auto text-center'/>
<h1 className='font-playFair py-2 text-2xl font-bold'> Matching Buyer</h1>
<p className=' font-workSense'>Buyers of the Properties are available
with us.</p>

</div>

<div className="cardItem border-2 p-4 rounded-lg shadow-xl card-bg">
<IoMdAnalytics className=' text-[40px] mx-auto text-center'/>
<h1 className='font-playFair py-2 text-2xl font-bold'> Matching Buyer</h1>
<p className=' font-workSense'>Buyers of the Properties are available
with us.</p>

</div>

<div className="cardItem border-2 p-4 rounded-lg shadow-xl card-bg">
<BsFillEasel2Fill className=' text-[40px] mx-auto text-center'/>
<h1 className='font-playFair py-2 text-2xl font-bold'> Homes On Lease</h1>
<p className=' font-workSense'>Homes at the point of using normal
distribution of letters.</p>

</div>

</div>
</div>
</div>





<div className='text-center'>
<h1 className='text-3xl font-playFair mt-4 font-bold' > Recent Projcts </h1>
<p  className='text-orange-500 mt-3  font-workSense'>See our some project</p>

</div>
<div  className="flex mt-4 mb-4 mx-auto w-[10%]" >
<p   className="bg-blue-800 w-10 h-1 " ></p>
<p  className="bg-orange-500 w-10 h-1   " ></p>
</div>

<Gallary></Gallary>
<h1 className='text-3xl font-playFair  mt-24 font-bold text-center' >Development Expertss</h1>
<p  className='text-orange-500 mt-3 font-workSense text-center'> Our esteemed team of development experts, with their profound skills...</p>

<div  className="flex mt-4 mb-4 mx-auto w-[10%]" >
<p   className="bg-blue-800 w-10 h-1 " ></p>
<p  className="bg-orange-500 w-10 h-1   " ></p>
</div>

<div  className='mt-8 grid sm:grid-cols-2 gap-4 lg:grid-cols-4'>



<div className='userItem shadow-xl rounded-lg'>

<img src={img1} alt="" className='w-full  sm:h-[200px] rounded-t-lg' />
<div className='py-4'>
<h1  className='text-2xl font-bold font-poppins text-center'> MD Maksudul Alam </h1>
<p  className='font-workSense text-orange-500 text-center' >Civil engineer</p>
</div>

</div>
<div className='userItem shadow-xl rounded-lg '>

<img src={img2} alt="" className='w-full sm:h-[200px] object-cover rounded-t-lg' />
<div className='py-4'>
<h1  className='text-2xl font-bold font-poppins text-center'> Saif Hasan </h1>
<p  className='font-workSense text-orange-500 text-center' >
Electric engineer</p>
</div>

</div>
<div className='userItem shadow-xl rounded-lg'>

<img src={img3} alt="" className='w-full sm:h-[200px] object-cover rounded-t-lg' />
<div className='py-4'>
<h1  className='text-2xl font-bold font-poppins text-center'>Musa Ebrahim </h1>
<p  className='font-workSense text-orange-500 text-center' >

Project managers</p>
</div>

</div>
<div className='userItem shadow-xl rounded-lg '>

<img src={img4} alt="" className='w-full sm:h-[200px] object-cover rounded-t-lg' />
<div className='py-4'>
<h1  className='text-2xl font-bold font-poppins text-center'>Mitchel jonson </h1>
<p  className='font-workSense text-orange-500 text-center' >Architect engineer
</p>
</div>

</div>
</div>
        </div>
    );
};

export default AboutUs;