
import PropTypes from 'prop-types';

import { FaBuilding, FaCheck } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';


const SingleCard = ({cardData}) => {



    const {area, description, estate_title, facilities, image, location, price, segment_name,id
, status
} = cardData
    return (
        <div  className=''>
          <div className="card  bg-base-100 shadow-xl">
<div  className='relative font-workSense'>
<figure  ><img src={image}  className='h-[300px] w-full '  /></figure>

<p  className="bg-[#F97316B3] p-2 status absolute top-0 left-0"> {status} </p>
<p  className="bg-[#F97316B3] p-2 status2 absolute top-0 right-0" > {area} </p>

</div>

<div  className='flex justify-between p-2 font-workSense bg-black text-white'>


  <p className='flex items-center gap-2' > <IoLocationOutline className='text-orange-500 ' />   {location} </p>
  <p className='flex items-center gap-2' > <CiDollar className='text-orange-500 ' />   {price} </p>
</div>

 
  <div className="card-body">
    <h2 className="card-title font-poppins  font-bold">{estate_title}</h2>
<p  className='flex items-center gap-2'> <FaBuilding  className='text-orange-500 '></FaBuilding>  {segment_name} </p>

    <p  className='my-2 h-16'>{description.slice(0, 100)}...</p>

<h1  className='font-bold font-playFair  mt-4'>Facilites :</h1>
    {
        facilities.map( (item, idx) =>  <p  className='flex items-center gap-2 ' key={idx}> <FaCheck  className='text-orange-500' />{item} </p>)
    }

    <div>

        
    </div>
  <div className="card-actions justify-end"> <Link to={`details/${id}`} className="btn bg-orange-500 text-white w-full"> View Property </Link>
    </div>
  </div>
</div>
        </div>
    );
};

SingleCard.propTypes = {
    cardData : PropTypes.array.isRequired
};

export default SingleCard;