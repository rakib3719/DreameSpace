import { Link, useRouteError } from "react-router-dom";

import errorImg from '../../assets/images/cuate.png'

const Error = () => {
    const error = useRouteError()
    console.log(error);
    return (
    <div className="bg-[#FFEE93F2] pt-8 md:pt-24 h-[700px] md:h-[600px]">

<div className="w-[90%] justify-between mx-auto mx-w-[1220px] flex flex-col-reverse md:flex-row  items-center bg-white shadow-xl rounded-xl">
         

 <div  className="text-center w-[50%] mx-auto mt-8 md:mt-0">
         
             <p  className="text-3xl font-poppins text-red-700 font-bold">OOPS..</p>
             <p  className="text-red-600 font-bold"> Page {error.statusText} </p>
             <p className="text-red-600">{error.data}</p>
    <div  className="mt-8 pb-4">

    <Link to={-1} className="btn w-[120px] bg-[#e0ce69] text-black" > Go Back </Link> <Link to='/' className="btn bg-orange-500 text-white mt-4 " > Back to home </Link>
    </div>
         </div>
         
         <div  className="error-bg">
         <img  src={errorImg}alt="" className={error.status == "404" ? ' w-[70%] mx-auto' : 'hidden'}/>
    <h1 className={!error.status == "404" ? 'text-3xl font-playFair text-red-700  font-bold p-48' : 'hidden'}> Somtheing is worng </h1>
         </div>
         
                 </div>
    </div>
    );
};

export default Error;