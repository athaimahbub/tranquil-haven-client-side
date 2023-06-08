import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination } from "swiper";

import slide1 from '../../assets/Cover_photo/NewSlide1.png';
import slide2 from '../../assets/Cover_photo/NewSlide2.png';
import slide3 from '../../assets/Cover_photo/NewSlide3.png';

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                
            >
                <SwiperSlide>
                   <img src={slide1} alt="Slide 1" className="w-full h-screen rounded" />
                </SwiperSlide>
                <SwiperSlide>
                   <img src={slide2} alt="Slide 1" className="w-full h-screen rounded" />
                </SwiperSlide>
                <SwiperSlide>
                   <img src={slide3} alt="Slide 1" className="w-full h-screen rounded" />
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="relative">
                        <img src={slide1} alt="Slide 1" className="w-full h-screen" />
                        <div className="absolute top-60 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                            <h3 className="text-center  mr-60 italic text-4xl font-semibold text-white">
                                Your mind & soul is beautiful
                            </h3>
                            <p className="text-center  mr-60 italic font-semibold text-white text-base">
                                Witness the Ethereal Beauty with Tranquil Haven
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img src={slide2} alt='Slide 2' className='w-full h-screen'></img>
                        <div className="absolute top-60 left-1/3 transform -translate-x-1-translate-y-1/2">
                            <h2 className="text-center ml-48 italic text-4xl font-semibold text-white ">
                                Eternal Love
                            </h2>
                            <h3 className="text-center  italic ml-48 text-4xl font-semibold text-white uppercase">
                                live towards eternity
                            </h3>
                            <p className="text-center  ml-96 pr-48 italic text-base font-semibold text-white">
                                Spend time with your body and soul together,so that body and soul shall see yourself absorbed and connected with everything
                            </p>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img src={slide3} alt='Slide 3' className='w-full h-screen'></img>
                        <div className="absolute top-60 left-1/3 transform -translate-x-1/2 -translate-y-1/2 ">
                            <h3 className="text-center  mr-60 italic text-4xl font-semibold text-lime-700">
                                The secret of your everyuth
                            </h3>
                            <p className="text-center  mr-60 italic text-base font-semibold  text-lime-600">
                                Lose yourself in ambience & atmosphere.
                            </p>
                        </div>
                    </div>

                </SwiperSlide> */}


            </Swiper>
        </div>
    );
};

export default Banner;