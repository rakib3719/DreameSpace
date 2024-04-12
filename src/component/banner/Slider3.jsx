import bg3 from '../../assets/images/hand-drawn-apartment-cartoon-vector-illustration-clipart-white-background_191095-41312__1_-removebg-preview.png'

const Slider3 = () => {
    return (
        <div>
            <div className="banner md:flex justify-between gap-8 items-center rounded-xl p-8 mt-8" >
            
          
            <div className="left-banner space-y-2 md:w-[40%]">
           
           <p  className='font-workSense text-orange-500' >Welcome to DreamSpace</p>
           <h1  className="text-[40px] font-bold font-poppins" >Convenient Student Housingt</h1>
            <p  className="font-workSense" > Close to Campus, Cafes, Libraries, the Vibrant Carmen Area, and Additional Amenities</p>
           
            </div>
            <div className="right-banner">
            <img  className='md:h-[500px] mx-auto ' src={bg3} alt="" />
           
           </div>
           
           
                   </div>  
        </div>
    );
};

export default Slider3;