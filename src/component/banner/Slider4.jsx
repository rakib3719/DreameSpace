import bg4 from '../../assets/images/hand-holding-house-real-estate-property-model-removebg-preview.png'

const Slider4 = () => {
    return (
        <div>
           <div className="banner justify-between md:flex gap-8 items-center rounded-xl p-8 mt-8" >
            
          
            <div className="left-banner space-y-2 md:w-[40%]">
           
           <p  className='font-workSense text-orange-500' >Welcome to DreamSpace</p>
          
<h1 className="text-[40px] font-bold font-poppins">Exquisite Senior Living Communities</h1>
<p className="font-workSense">Elegant residences nestled near essential amenities like supermarkets, bus stops, train stations, and the lively Carmen Neighborhood, offering a vibrant lifestyle for seniors and their families.</p>
           
            </div>
            <div className="right-banner ">
            <img  className='md:h-[500px] mx-auto' src={bg4} alt="" />
           
           </div>
           
           
                   </div>   
        </div>
    );
};

export default Slider4;