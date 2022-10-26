import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.scss";
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
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
            {/*  Carousel wrapper  */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96 SliderWrapper">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Autoplay, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                >
                    {bannerList &&
                        bannerList.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <div data-carousel-item="">
                                        <img
                                            src={item.desktop_image}
                                            className="w-auto"
                                            alt={item.alt}
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            </div>
        </>
    );
}

export default index;
