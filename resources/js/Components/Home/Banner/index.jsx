import React, { useEffect, useState } from "react";

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

    return (
        <>
            <div className="w-full h-auto block bg-black overflow-hidden relative flex rounded-2xl">
                {bannerList.map((item, index) => {
                    return (
                        <img
                            href={item.href}
                            src={item.src}
                            alt={item.alt}
                            className="h-full object-cover"
                        />
                    );
                })}
            </div>
        </>
    );
}

export default index;
