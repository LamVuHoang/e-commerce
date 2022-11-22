import React, { useState } from "react";
import AccountDialog from "../AccountDialog/index";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";
import { tabConstants } from "../../Store/Constants";
import EnterCredential from "./EnterCredential";
import UserProfile from "./UserProfile";

export default function index() {
    const [showDialog, setShowDialog] = useState(false);
    const [dialogTab, setDialogTab] = useState(tabConstants.LOGIN_TAB);
    const [cart, setCart] = useState([
        { price: 20, quantity: 1 },
        { price: 30, quantity: 1 },
    ]);

    const priceCal = () => {
        return cart.reduce((prev, item) => {
            return prev + item.price * item.quantity;
        }, 0);
    };

    const logInStatus = useSelector(
        (state) => state.authenticationReducer.logInStatus
    );
    return (
        <>
            <a
                className="md:block fixed hidden bottom-10 cursor-pointer right-16 rounded-full bg-gray-200 p-2"
                href="#app"
            >
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
                className="w-full block bg-white py-3 px-3 md:px-12 lg:px-20 xl:px-40 2xl:px-60 flex justify-between items-center sticky top-0 left-0 border-b-2 boder-gray-300 z-30"
                id="top"
            >
                {/* logo */}
                <Link to={"/"} className="px-2">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1000px-Logo_NIKE.svg.png"
                        className="h-6"
                    />
                </Link>
                {/* search */}
                <form className="md:grow w-0 overflow-hidden mx-12 max-w-md">
                    <div className="flex">
                        <input
                            type="search"
                            id="default-search"
                            className="grow block px-4 py-2 w-auto text-sm text-gray-800 bg-gray-50 rounded-full border-2 border-gray-300 place-holder-gray-300 focus:outline-none focus:border-gray-700 duration-200 ease-in"
                            placeholder="Search Items, Sellers, Categories,..."
                        />
                        <button className="bg-transparent py-2 px-2.5 text-sm rounded-full justify-center items-center flex hover:bg-gray-200 ml-1 duration-200 ease-in">
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
                <div className="flex items-center justify-center w-fit">
                    {logInStatus ? <UserProfile /> : <EnterCredential />}
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
                        {cart && cart.length > 0 ? (
                            <div className="flex flex-col relative md:pr-2">
                                <span className="text-left font-bold text-sm -mb-1">
                                    ${priceCal()}
                                </span>
                                <span className="text-left text-xs">
                                    {cart.length} item(s)
                                </span>
                            </div>
                        ) : (
                            <span className="text-sm md:pr-2">No items</span>
                        )}
                    </button>
                </div>
                <AccountDialog
                    show={showDialog}
                    tab={dialogTab}
                    setTab={setDialogTab}
                    setShow={setShowDialog}
                />
            </div>
        </>
    );
}
