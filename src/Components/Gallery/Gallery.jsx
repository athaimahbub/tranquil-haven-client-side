import React, { useEffect } from 'react';
import galleryImg1 from '../../assets/popular_class/meditation1.png';
import galleryImg2 from '../../assets/popular_class/yoga2.png';
import galleryImg3 from '../../assets/popular_class/meditation6.png';
import galleryImg4 from '../../assets/popular_class/hatha_yoga.png';
import galleryImg5 from '../../assets/popular_class/kundalini_yoga.png';
import galleryImg6 from '../../assets/popular_class/yoga1.png';
import galleryImg7 from '../../assets/popular_class/yoga3.png';
import galleryImg8 from '../../assets/popular_class/yoga4.png';




import AOS from 'aos';
import 'aos/dist/aos.css';



const Gallery = () => {

   useEffect(() => {
      AOS.init();
    }, []);
  
    return (
        <div className="container mx-auto mt-8">
            <h2 className='text-center mt-12 mb-8 text-4xl text-cyan-700 font-bold'>Tranquil Haven Gallery</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2" >
          {/* Photo items will be added here */}
          <div className="w-full h-48 md:h-auto md:aspect-w-1 md:aspect-h-1  rounded " data-aos="zoom-out-right" data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
             <img src={galleryImg1} className="w-full rounded-lg" />  
          </div>
          <div className="w-full h-48 md:h-auto md:aspect-w-1 md:aspect-h-1  rounded " data-aos="zoom-out-up" data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
             <img src={galleryImg2} className="w-full h-full rounded-lg" />  
          </div>
          <div className="w-full h-48 md:h-auto md:aspect-w-1 md:aspect-h-1  rounded" data-aos="zoom-out-up" data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
             <img src={galleryImg3} className="w-full h-full rounded-lg" />  
          </div>
          {/* border-solid border-2 border-blue-400  */}
          <div className="w-full h-48 md:h-auto md:aspect-w-1 md:aspect-h-1 rounded" data-aos="zoom-out-left" data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
             <img src={galleryImg4} className="w-full h-full rounded-lg" />  
          </div>
          {/* secound row */}
          <div className="w-full h-48 md:h-auto md:aspect-w-1 md:aspect-h-1 rounded" data-aos="zoom-out-right" data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
             <img src={galleryImg5} className="w-full  rounded-lg" />  
          </div>
          <div className="w-full h-48 md:h-auto md:aspect-w-1 md:aspect-h-1 rounded" data-aos="zoom-out-up" data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
             <img src={galleryImg6} className="w-full h-full rounded-lg" />  
          </div>
          <div className="w-full h-48 md:h-auto md:aspect-w-1 md:aspect-h-1 rounded" data-aos="zoom-out-up" data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
             <img src={galleryImg7} className="w-full h-full rounded-lg" />  
          </div>
          <div className="w-full h-48 md:h-auto md:aspect-w-1 md:aspect-h-1  rounded" data-aos="zoom-out-left" data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
             <img src={galleryImg8} className="w-full h-full rounded-lg" />  
          </div>
        </div>

        {/* border-solid border-2 border-blue-400 */}
      </div>
    );
};

export default Gallery;