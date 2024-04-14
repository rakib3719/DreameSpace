import { Helmet } from "react-helmet-async";
import { FaBuilding, FaChartArea, FaLocationArrow } from "react-icons/fa";
import { ScrollRestoration, useLoaderData, useParams } from "react-router-dom";



const Details = () => {
  
    const datas = useLoaderData();
    const {id} = useParams();
    const mainData = datas.find(datas => datas.id === parseInt(id))
console.log(mainData);
const {area, description
, engineers, estate_title, facilities, image, location
, price
, segment_name, status
, unique_feature} = mainData

    return (
 <div  className=" w-[94%] md:w-[90%] mx-auto mt-8">

<Helmet>

<title> PropertyDetails {id}</title>

</Helmet>
<div className="hero min-h-[80vh] border-[3px] border-b-0 rounded-b-none rounded  border-orange-500" style={{backgroundImage: `url(${image})`}}>
<ScrollRestoration></ScrollRestoration>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content animate__animated animate__fadeInDown text-center text-neutral-content">
    <div className="max-w-md">
      <h1   className="mb-5  text-3xl font-bold font-playFair">{estate_title}</h1>
      <h1 className="mb-5 text-xl animate__animated animate__fadeInLeft font-bold font-poppins">{segment_name}</h1>
      <p className="mb-5 font-workSense">{description}</p>
  
    </div>
  </div>
</div>

<div className="bg-[#F85C2C]  grid grid-cols-2 sm:grid-cols-4 justify-between   font-workSense ">
<div className="  py-2  ml-4 border-r-2 pr-2 pt-6 ">

<p  className=" text-white flex items-center gap-4 border-b-2 sm:border-b-0 pb-3 ">
<FaChartArea>   </FaChartArea> {area}</p>
</div>
<div className="  py-3  ml-4 sm:border-r-2 pr-2 pt-6  ">

<p   className=" text-white  flex items-center gap-4 border-b-2 sm:border-b-0 pb-3">
<FaLocationArrow>   </FaLocationArrow> {location.split(",").slice(0,1)}</p>
</div>
<div className="   ml-4 border-r-2 pr-2 pt-6 ">

<p  className=" text-white flex items-center gap-4">
<FaBuilding>   </FaBuilding> {status}</p>
</div>
<div className=" pb-2  ml-4 mr-2 pt-6">

<p  className=" text-white flex items-center gap-4">
<FaChartArea>   </FaChartArea> {area}</p>
</div>

</div>




<div  className="">

<div className="mt-8 ">

<h1   data-aos="fade-right"  data-aos-duration="1000"  className="font-poppins font-semibold text-xl">{segment_name}  {status} in {location}</h1>
<p  data-aos="flip-left"  data-aos-duration="3000" data-aos-delay="300" className="font-workSense "> Made by {engineers} </p>
<h5 data-aos="flip-up"  data-aos-duration="3000" data-aos-delay="2000"  className="font-semibold font-workSense text-lg"> {price} </h5>
</div>



<div data-aos="fade-up"
     data-aos-duration="3000"
     data-aos-delay="2500"
 className="mt-8">

  <h1  className="font-bold font-playFair text-2xl">Facilities:</h1>

  {

    
facilities.map( (item, idx)=> <p key={idx}> {item}</p>)
  }
</div>


</div>


 </div>
    );
};

export default Details;