import bg1 from '../../assets/images/bg-1.png'

const Slider = () => {
    return (
        <div>
              <div className="banner md:flex gap-8 items-center rounded-xl px-8 pt-8 pb-12 mt-8" >
            
          
            <div className="left-banner space-y-2 md:w-[40%]">
           
           <p  className='font-workSense text-orange-500' >Welcome to DreamSpace</p>
           <h1  className="text-[40px] font-bold font-poppins" >Exquisite Family House Management</h1>
            <p  className="font-workSense" >Adjacent to Supermarkets, Bus Stops, Train Stations, the Vibrant Carmen Neighborhood, and More!</p>
           
            </div>
            <div className="right-banner mt-8 md:mt-0">
            <img  className=' mx-auto md:h-[500px]' src={bg1} alt="" />
           
           </div>
           
           
                   </div>
        </div>
    );
};

export default Slider;