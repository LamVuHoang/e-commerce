import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.scss";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
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
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96"
                >
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={true}
                        pagination={{ clickable: true }}
                        loop={true}
                        speed={1100}
                        autoplay={{delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true}}
                    >
                        {bannerList &&
                            bannerList.map((item) => {
                                return (
                                    <SwiperSlide>
                                        <div key={item.id}>
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
            </div>
        </>
    );
}

export default index;
