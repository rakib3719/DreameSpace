import bg2 from '../../assets/images/bgg-44.png'

const Slider2 = () => {
    return (
        <div>
              <div className="banner md:flex gap-8 items-center rounded-xl p-8 mt-8" >
            
          
            <div className="left-banner space-y-2 md:w-[40%]">
           
           <p  className='font-workSense' >Welcome to DreamSpace</p>
           <h1  className="text-3xl font-bold font-poppins" >Luxurious Apartment Living </h1>
            <p  className="font-workSense" >City Living Made Easy - Close to Shops, Transit, Local Attractions, Lively Neighborhood, and More!!</p>
           
            </div>
            <div className="right-banner mt-8 md:mt-0">
            <img  className=' h-[200px] mx-auto w-[500px]  md:h-[500px] lg:w-[700px] mx-auto' src={bg2} alt="" />
           
           </div>
           
           
                   </div>
        </div>
    );
};

export default Slider2;