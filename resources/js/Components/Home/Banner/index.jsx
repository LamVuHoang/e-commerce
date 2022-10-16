import React, { useEffect, useState } from "react";
import "./style.css";

function index() {
    const bannerList = [
        {
            src: "https://cdn.tgdd.vn/2022/10/banner/2880-800-1920x533-2.png",
            alt: "abc",
            href: "https://www.topzone.vn/",
        },
        {
            src: "https://cdn.tgdd.vn/2022/10/banner/ws8-2880-800-1920x533.png",
            alt: "abc",
            href: "https://www.topzone.vn/",
        },
        {
            src: "https://cdn.tgdd.vn/2022/09/banner/2880x800--2--1920x533.jpeg",
            alt: "abc",
            href: "https://www.topzone.vn/",
        },
        {
            src: "https://cdn.tgdd.vn/2022/10/banner/khaitruong-new-2880-800-1920x533-1.png",
            alt: "abc",
            href: "https://www.topzone.vn/",
        },
        {
            src: "https://cdn.tgdd.vn/2022/09/banner/mac-2880-800-1920x533.png",
            alt: "abc",
            href: "https://www.topzone.vn/",
        },
    ];

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
            <div className="w-full mb-3 flex relative">
                {bannerList.map((item, index) => {
                    return (
                        <a
                            key={index}
                            href={item.href}
                            className={`w-full shrink-0 slider-item ${
                                index < current
                                    ? "slider-item--before"
                                    : index > current
                                    ? "slider-item--after"
                                    : "slider-item--current"
                            }`}
                        >
                            <img
                                key={index}
                                src={item.src}
                                alt={item.alt}
                                className="w-full object-cover rounded-2xl"
                            />
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
                                className={`h-2 mx-1 bg-gray-300 rounded-full transition-all ${current===index ? 'bg-gray-600 hover:bg-gray-700 w-8' : 'hover:bg-gray-400 w-5'}`}
                                onClick={() => selectButtonHandler(index)}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default index;
