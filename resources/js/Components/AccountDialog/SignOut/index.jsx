import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tabConstants } from "../../../Store/Constants";
import {
    changeLoginStatus,
    logOutUser,
} from "../../../Store/Actions/authentication.action";
import {
    changeTabName,
    changeTabStatus,
} from "../../../Store/Actions/tab.action";

function index() {
    const dispatch = useDispatch();

    const logOutResult = useSelector(
        (state) => state.authenticationReducer.logOutResult
    );

    console.log("logOutResult: ", logOutResult);

    const confirmSignOut = () => {
        dispatch(logOutUser());
        window.localStorage.removeItem("token");
        dispatch(changeLoginStatus(false));

        dispatch(changeTabStatus(tabConstants.WAITING_TAB));
        const logoutTimeout = setTimeout(() => {
            dispatch(changeTabName(tabConstants.LOGIN_TAB));
            dispatch(changeTabStatus(false));
        }, 1000);

        async () => {
            logoutTimeout();
            clearTimeout(logoutTimeout);
        };
    };

    const cancelSignOut = () => {
        dispatch(changeTabStatus(false));
        dispatch(changeTabName(tabConstants.LOGIN_TAB));
    };
    return (
        <>
            <p className="text-xl font-bold text-center py-3">
                Do you want to sign out?
            </p>
            <div className="flex mt-2">
                <button
                    className="my-button my-button--primary mr-1 my-button--smaller"
                    onClick={confirmSignOut}
                >
                    Yes
                </button>
                <button
                    className="my-button my-button--secondary ml-1 my-button--smaller"
                    onClick={cancelSignOut}
                >
                    No
                </button>
            </div>
        </>
    );
}

export default index;
