import React, { useEffect } from "react";
import "./style.scss";
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useAppSelector from "../../../Hooks/useAppSelector";
import useAppDispatch from "../../../Hooks/useAppDispatch";
import { getAllBanner } from "../../../Store/Actions";

const Index: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllBanner());
    }, []);
    const bannerList = useAppSelector(
        (state) => state.bannerReducer.bannerList
    );

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
                        bannerList.map(
                            (item: {
                                id: string;
                                desktop_image: string;
                                alt: string;
                            }) => {
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
                            }
                        )}
                </Swiper>
            </div>
        </>
    );
};

export default Index;
