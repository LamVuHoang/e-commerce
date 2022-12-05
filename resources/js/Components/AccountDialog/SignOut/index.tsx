import React from "react";
import useAppDispatch from "../../../Hooks/useAppDispatch";
import { changeSigninStatus } from "../../../Store/Reducers/authentication.reducer";
import { resetDefaultTab } from "../../../Store/Reducers/tab.reducer";
import { signOutUser } from "../../../Store/Actions";

const Index: React.FC = () => {
    const dispatch = useAppDispatch();
    const confirmSignOut = () => {
        dispatch(signOutUser());
        window.localStorage.removeItem("token");
        dispatch(changeSigninStatus(false));
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
