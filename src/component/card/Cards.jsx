import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";



const Cards = () => {


    const [cardData,  setCardData] = useState([]);
    useEffect(()=> {

        fetch('data.json')
        .then(res => res.json())
        .then(data =>  setCardData(data))
    },
    
    [])
    return (
        <div  className="mt-16" >
          <div  className="text-center">

          <p data-aos="fade-down"
   data-aos-duration="2000"  data-aos-delay="50"  className="text-orange-500 font-workSense" >Our Featured Properties For Sale and Rent</p>
            <h1  data-aos="fade-right"
   data-aos-duration="2000"  data-aos-delay="200" className=" text-2xl lg:text-3xl font-playFair font-bold" >Properties For Sale & Rent</h1>
<div   className="flex mt-4 mb-4  w-[10%] mx-auto text-center" >
<p   className="bg-black w-10 h-1" ></p>
<p  className="bg-orange-500 w-10 h-1   " ></p>

</div>
          </div>

    
<div  className="grid md:grid-cols-2  lg:grid-cols-3 gap-8 mt-16 ">

{

cardData.map(cardData => <SingleCard  key={cardData.id} cardData={cardData} ></SingleCard>)

}

</div>

        </div>
    );
};

export default Cards;