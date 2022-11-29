import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tabConstants } from "../../../Store/Constants";
import { changeLoginStatus } from "../../../Store/Reducers/authentication.reducer";
import {
    changeTabStatus,
    resetDefaultTab,
} from "../../../Store/Reducers/tab.reducer";
import { logOutUser } from "../../../Store/Actions";

const Index: React.FC = () => {
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
            dispatch(resetDefaultTab());
        }, 1000);

        async () => {
            logoutTimeout();
            clearTimeout(logoutTimeout);
        };
    };

    const cancelSignOut = () => {
        dispatch(resetDefaultTab());
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
};

export default Index;
