import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";

function index() {
    const [width, setWidth] = useState(window.innerWidth);
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
    const [current, setCurrent] = useState(2);

    const nextButtonHandler = () => {
        setCurrent(current + 1);
    };
    const prevButtonHandler = () => {
        setCurrent(current - 1);
    };
    const selectButtonHandler = (i) => {
        setCurrent(i);
    };

    return (
        <>
            {bannerList != null && (
                <div className="w-full mb-5 md:mb-3 flex relative">
                    {bannerList.map((item, index) => {
                        return (
                            <a
                                key={index}
                                href={item.link}
                                className={`w-full shrink-0 slider-item ${
                                    index < current
                                        ? "slider-item--before"
                                        : index > current
                                        ? "slider-item--after"
                                        : "slider-item--current"
                                }`}
                            >
                                {width >= 1024 ? (
                                    <img
                                        key={index}
                                        src={item.desktop_size}
                                        alt={item.alt}
                                        className="w-full object-cover rounded-2xl"
                                    />
                                ) : (
                                    <img
                                        key={index}
                                        src={item.mobile_size}
                                        alt={item.alt}
                                        className="w-full object-cover rounded-2xl"
                                    />
                                )}
                            </a>
                        );
                    })}
                    <button
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 disabled:text-gray-200"
                        onClick={prevButtonHandler}
                        disabled={current == 0}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 disabled:text-gray-200"
                        onClick={nextButtonHandler}
                        disabled={current == bannerList.length - 1}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                    <div className="flex absolute top-full left-1/2 mt-2 -translate-x-1/2">
                        {bannerList.map((item, index) => {
                            return (
                                <button
                                    className={`h-2 mx-1 bg-gray-300 rounded-full transition-all ${
                                        current === index
                                            ? "bg-gray-600 hover:bg-gray-700 w-8"
                                            : "hover:bg-gray-400 w-5"
                                    }`}
                                    onClick={() => selectButtonHandler(index)}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
}

export default index;
