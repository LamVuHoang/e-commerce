import React, { useEffect, useState } from "react";
import './style.css';

function index() {
    const bannerList = [
        {
            src: "https://cdn.tgdd.vn/2022/10/banner/2880-800-1920x533-2.png",
            alt: "abc",
            href: "https://www.topzone.vn/",
        },
        {
            src: "https://cdn.tgdd.vn/2022/10/banner/2880-800-1920x533-2.png",
            alt: "abc",
            href: "https://www.topzone.vn/",
        },
        {
            src: "https://cdn.tgdd.vn/2022/10/banner/2880-800-1920x533-2.png",
            alt: "abc",
            href: "https://www.topzone.vn/",
        },
    ];
    
    return ( <>
        <div className="w-full h-96 block bg-black overflow-hidden relative">
            {
                bannerList.map((item, index) => {
                    return (
                        <a href={item.href} key={index} className="banner-item">
                            <img src={item.src} alt={item.alt} className="w-full h-fit"/>
                        </a>
                    );
                })
            }
        </div>
    </>);
}

export default index;