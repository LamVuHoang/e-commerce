import React, { useEffect, useState } from "react";
import "./style.css";
import SignIn from "./SignIn/index";
import SignUp from "./SignUp/index";

function index(props) {
    const [show, setShow] = useState(false);
    const [tab, setTab] = useState(0); // 0: SignIn, 1: SignUp
    useEffect(() => {
        setShow(props.show);
    }, [props]);
    return (
        <>
            {show == true && (
                <div className="top-0 left-0 right-0 bottom-0 modal-filter fixed items-center flex flex-col my-dialog">
                    <div className="lg:w-1/3 md:w-1/2 sm:w-2/3 w-5/6 h-fit bg-white mt-32 p-4 rounded-2xl my-shadow relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="absolute sm:w-6 sm:h-6 sm:-top-2 sm:-right-2 sm:translate-x-0 w-10 h-10 -bottom-12 right-1/2 translate-x-1/2 cursor-pointer rounded-full p-1 bg-white my-shadow hover:bg-gray-200"
                            onClick={() => {props.setShow(false); setTab(0);}}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                        {
                            tab == 0 ? <SignIn setShow={props.show} setTab={setTab}/>
                            : <SignUp setShow={props.show} setTab={setTab}/>
                        }
                    </div>
                </div>
            )}
        </>
    );
}

export default index;
