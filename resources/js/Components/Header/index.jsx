import React, { useState } from "react";
import AccountDialog from "../AccountDialog/index";
import "./style.css";

export default function index() {
    // const [user, setUser] = useState({
    //     userName: "nhonnguyen3112",
    //     fullName: "Nhon Nguyen Thanhhhhhhhhhh",
    //     avatar: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80",
    //     role: "admin",
    // });
    const [user, setUser] = useState(null);
    const [showSignIn, setShowSignIn] = useState(false);
    const [cart, setCart] = useState([
        { price: 20, quantity: 1 },
        { price: 30, quantity: 1 },
    ]);

    const priceCal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };


    return (
        <>
            <a className="md:block fixed hidden bottom-10 cursor-pointer right-16 rounded-full bg-gray-200 p-2" href="#app">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                    />
                </svg>
            </a>
            <div
                className="w-full block bg-white py-3 px-5 md:px-12 lg:px-20 xl:px-40 2xl:px-60 flex justify-between items-center text-black sticky top-0 left-0 border-b-2 boder-gray-300"
                id="top"
            >
                {/* logo */}
                <button className="">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1000px-Logo_NIKE.svg.png"
                        className="h-6"
                    />
                </button>
                {/* search */}
                <form className="md:w-1/2 w-0 overflow-hidden">
                    <div class="flex">
                        <input
                            type="search"
                            id="default-search"
                            class="block px-4 py-2 w-11/12 text-sm text-gray-800 bg-gray-50 rounded-full border-2 border-gray-300 place-holder-gray-300 focus:outline-none focus:border-gray-700 duration-200 ease-in"
                            placeholder="Search Items, Sellers, Categories,..."
                        />
                        <button
                            type="submit"
                            class="text-gray-700 bg-transparent w-1/12 py-2 text-sm rounded-full justify-center items-center flex hover:bg-gray-200 ml-2 duration-200 ease-in"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
                {/* user */}
                <div className="flex items-center justify-center">
                    {user !== null ? (
                        <div className="flex items-center relative user-button p-2 rounded-full hover:bg-gray-200 duration-200 ease-in">
                            <img
                                src={user.avatar}
                                alt="user-img"
                                className="h-6 w-6 rounded-full object-cover"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-3 h-3 ml-1 stroke-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                            <div className="h-12 w-full absolute top-0 left-0 block cursor-pointer"></div>
                            <div className="hidden absolute top-12 right-0 user-button-dropdown bg-white my-shadow w-60 text-black text-left text-sm rounded-lg">
                                <div className="w-auto m-2 p-2 rounded-xl hover:bg-gray-200 cursor-pointer">
                                    <div className="flex items-center">
                                        <img
                                            src={user.avatar}
                                            alt="user-img"
                                            className="h-16 w-16 rounded-full object-cover"
                                        />
                                        <div className="ml-2">
                                            <div className="text-md font-bold one-line-text w-32">
                                                <span>{user.fullName}</span>
                                            </div>
                                            <div className="text-xs font-medium one-line-text w-32">
                                                @{user.userName}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {user.role === "admin" && (
                                    <>
                                        <div className="break-content"></div>
                                        <div
                                            href=""
                                            className="user-button-dropdown-item"
                                        >
                                            Admin Dashboard
                                        </div>
                                    </>
                                )}
                                {user.role === "seller" && (
                                    <>
                                        <div className="break-content"></div>
                                        <div
                                            href=""
                                            className="user-button-dropdown-item"
                                        >
                                            Your shop
                                        </div>
                                    </>
                                )}
                                <div className="break-content"></div>
                                <div className="user-button-dropdown-item">
                                    Order History
                                </div>
                                <div className="user-button-dropdown-item">
                                    Notification
                                </div>
                                <div className="user-button-dropdown-item">
                                    Product reviews
                                </div>
                                <div className="break-content"></div>
                                <div className="user-button-dropdown-item">
                                    Sign out
                                </div>
                                <div className="w-full h-2 block"></div>
                            </div>
                        </div>
                    ) : (
                        <button className="flex items-center relative user-button py-1 px-2 rounded-full hover:bg-gray-200 duration-200 ease-in"
                            onClick={() => {setShowSignIn(true); console.log("fren")}}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                />
                            </svg>

                            <div className="flex flex-col pl-2">
                                <span className="text-left font-bold text-sm -mb-1">
                                    Sign in
                                </span>
                                <span className="text-left text-xs">
                                    or Sign up
                                </span>
                            </div>
                        </button>
                    )}
                    <button className="ml-1 flex items-center rounded-full hover:bg-gray-200 duration-200 ease-in">
                        <div className="relative p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                            </svg>
                        </div>
                        {cart.length > 0 ? (
                            <div className="flex flex-col relative pr-2">
                                <span className="text-left font-bold text-sm -mb-1">
                                    ${priceCal()}
                                </span>
                                <span className="text-left text-xs">
                                    {cart.length} item(s)
                                </span>
                            </div>
                        ) : (
                            <span className="text-sm pr-2">No items</span>
                        )}
                    </button>
                </div>
                <AccountDialog show={showSignIn} setShow={setShowSignIn}/>
            </div>
        </>
    );
}
