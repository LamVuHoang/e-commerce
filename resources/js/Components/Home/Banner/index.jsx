import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.scss";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function index() {
    const [bannerList, setBannerList] = useState(null);

    useEffect(() => {
        const url = "http://localhost:8000/api/banner";
        axios
            .get(url)
            .then((res) => {
                if (
                    typeof res.data.data == "object" &&
                    res.data.data.length > 0
                ) {
                    setBannerList(res.data.data);
                } else {
                    setBannerList(null);
                }
            })
            .catch((err) => {
                setBannerList(null);
            });
    }, []);

    return (
        <>
            <div
                id="default-carousel"
                className="relative"
                data-carousel="static"
            >
                {/*  Carousel wrapper  */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                    >
                        {bannerList &&
                            bannerList.map((item) => {
                                return (
                                    <SwiperSlide>
                                        <div
                                            key={item.id}
                                            // className="section duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
                                            data-carousel-item=""
                                        >
                                            <img
                                                src={item.desktop_image}
                                                className="w-auto"
                                                alt={item.alt}
                                            />
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        {/* <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide> */}
                    </Swiper>
                    {/* Item 1 
                    <div
                        className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
                        data-carousel-item=""
                    >
                        <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
                            First Slide
                        </span>
                        <img
                            src="https://i.ebayimg.com/images/g/1kYAAOSwUG9jVgMP/s-l1600.webp"
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>
                    {/*  Item 2  
                    <div
                        className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
                        data-carousel-item=""
                    >
                        <img
                            src="https://i.ebayimg.com/images/g/clgAAOSwVgNjT8Q7/s-l1600.webp"
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>
                    {/*  Item 3  
                    <div
                        className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
                        data-carousel-item=""
                    >
                        <img
                            src="https://i.ebayimg.com/images/g/df8AAOSwuSxjRN9S/s-l1600.webp"
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default index;
