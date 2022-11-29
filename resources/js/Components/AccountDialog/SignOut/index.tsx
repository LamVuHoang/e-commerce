import React from "react";
import useAppSelector from "../../../Hooks/useAppSelector";
import useAppDispatch from "../../../Hooks/useAppDispatch";
import { tabConstants } from "../../../Store/Constants";
import { changeLoginStatus } from "../../../Store/Reducers/authentication.reducer";
import {
    changeTabName,
    changeTabStatus,
    resetDefaultTab,
} from "../../../Store/Reducers/tab.reducer";
import { logOutUser } from "../../../Store/Actions";

const Index: React.FC = () => {
    const dispatch = useAppDispatch();

    const logOutResult = useAppSelector(
        (state) => state.authenticationReducer.logOutResult
    );

    const confirmSignOut = () => {
        dispatch(logOutUser());
        window.localStorage.removeItem("token");
        dispatch(changeLoginStatus(false));

        const logoutTimeout = setTimeout(() => {
            dispatch(changeTabName(tabConstants.WAITING_TAB));
        }, 1000);
        clearTimeout(logoutTimeout);
        dispatch(resetDefaultTab());
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
