import React from "react";
import SignIn from "./SignIn/index";
import SignUp from "./SignUp/index";
import SignOut from "./SignOut/index";
import Modal from "../../UI/Modal/index";
import { tabConstants } from "../../Store/Constants";
import { useDispatch, useSelector } from "react-redux";
import {
    resetDefaultTab,
} from "../../Store/Reducers/tab.reducer";

const Index: React.FC = () => {
    const dispatch = useDispatch();

    const closeDialog = () => {
        dispatch(resetDefaultTab());
    };

    const tab = useSelector((state) => state.tabReducer);

    return (
        <>
            <Modal
                className={`top-0 left-0 right-0 bottom-0 modal-filter fixed items-center flex flex-col my-dialog ${
                    tab?.tabStatus ? "my-dialog--show" : "my-dialog--hide"
                }`}
            >
                {tab.tabStatus && (
                    <div
                        className={`h-fit bg-white mt-32 p-4 rounded-2xl my-shadow relative ${
                            tab.tabName != tabConstants.SIGNOUT_TAB &&
                            tab.tabName != tabConstants.WAITING_TAB
                                ? "lg:w-1/3 md:w-1/2 sm:w-2/3 w-5/6"
                                : "xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 w-5/6"
                        }`}
                    >
                        {tab.tabName != tabConstants.SIGNOUT_TAB &&
                            tab.tabName != tabConstants.WAITING_TAB &&
                            tab.tabName !=
                                tabConstants.SIGNUP_SUCCESSFULLY_TAB && (
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
                        {tab.tabName == tabConstants.LOGIN_TAB && <SignIn />}
                        {tab.tabName == tabConstants.SIGNUP_TAB && <SignUp />}
                        {tab.tabName == tabConstants.SIGNOUT_TAB && <SignOut />}
                        {tab.tabName == tabConstants.WAITING_TAB && (
                            <div className="w-full h-full flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-10 h-10 animate-spin text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                    />
                                </svg>

                                <p className="text-xl font-bold text-center py-3">
                                    Loading...
                                </p>
                            </div>
                        )}

                        {/* {(
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-10 h-10 text-green-500"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <p className="text-xl font-bold text-center py-3">
                                Sign up successfully!
                            </p>
                            <button
                                className="my-button my-button--primary mb-2 mt-3"
                                onClick={() => {
                                    // props.setTab(tabConstants.LOGIN_TAB)
                                }}
                            >
                                Sign In Now
                            </button>
                        </div>
                    )} */}
                    </div>
                )}
            </Modal>
        </>
    );
};

export default Index;
