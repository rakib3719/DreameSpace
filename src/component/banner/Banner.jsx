
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  Autoplay, Pagination, Scrollbar,A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// Import Swiper styles
import 'swiper/css';
import Slider from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';
import Slider4 from './Slider4';




const Banner = () => {

      

   
    return (


<Swiper 
   modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}
spaceBetween={50}
slidesPerView={1}
navigation

   
onSlideChange={() => console.log('slide change')}
onSwiper={(swiper) => console.log(swiper)}

className='z-0 '
speed={1500}
autoplay={{
    delay: 2000,
  
    disableOnInteraction: false,
  }}
   

>
<SwiperSlide   > <Slider></Slider> </SwiperSlide>
<SwiperSlide> <Slider2></Slider2> </SwiperSlide>
<SwiperSlide > <Slider3></Slider3>  </SwiperSlide>
<SwiperSlide>  <Slider4></Slider4> </SwiperSlide>

</Swiper>

    );
};

export default Banner;