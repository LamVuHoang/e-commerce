import React, { useEffect, useState } from "react";
import SignIn from "./SignIn/index";
import SignUp from "./SignUp/index";
import SignOut from "./SignOut/index";

function index(props) {
    const [show, setShow] = useState(false);
    const [tab, setTab] = useState(props.tab || 0); // 0: SignIn, 1: SignUp, 2: SignOut, 3: Waiting
    useEffect(() => {
        setShow(props.show);
        setTab(props.tab);
    }, [props]);
    const closeDialog = () => {
        props.setShow(false);
        props.setTab(0);
    };
    return (
        <>
                <div className={`top-0 left-0 right-0 bottom-0 modal-filter fixed items-center flex flex-col my-dialog ${
                    show ? "my-dialog--show" : "my-dialog--hide"
                }`}>
                    <div
                        className={`h-fit bg-white mt-32 p-4 rounded-2xl my-shadow relative ${
                            tab != 2
                                ? "lg:w-1/3 md:w-1/2 sm:w-2/3 w-5/6"
                                : "xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 w-5/6"
                        }`}
                    >
                        {tab != 2 && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="absolute sm:w-6 sm:h-6 sm:-top-2 sm:-right-2 sm:translate-x-0 w-10 h-10 -bottom-12 right-1/2 translate-x-1/2 cursor-pointer rounded-full p-1 bg-white my-shadow hover:bg-gray-200"
                                onClick={closeDialog}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        )}
                        {tab == 0 ? (
                            <SignIn
                                setShow={props.setShow}
                                setTab={props.setTab}
                            />
                        ) : tab == 1 ? (
                            <SignUp
                                setShow={props.setShow}
                                setTab={props.setTab}
                            />
                        ) : (
                            <SignOut
                                setShow={props.setShow}
                                setTab={props.setTab}
                            />
                        )}
                    </div>
                </div>
        </>
    );
}

export default index;
