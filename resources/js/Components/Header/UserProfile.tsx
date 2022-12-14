import { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import useAppSelector from "../../Hooks/useAppSelector";
import useAppDispatch from "../../Hooks/useAppDispatch";
import { getUserInfo } from "../../Store/Actions";
import { authenticationConstants, tabConstants } from "../../Store/Constants";
import {
    changeTabName,
    changeAuthenTabStatus,
} from "../../Store/Reducers/tab.reducer";
import UserResource from "../../Type/UserResource.type";
const UserProfile: React.FC = () => {
    const dispatch = useAppDispatch();

    const userInfo: UserResource = useAppSelector(
        (state) => state.authenticationReducer.userInfo
    );

    const retrieveUserInfo = useCallback(async () => {
        dispatch(getUserInfo());
    }, []);

    useEffect(() => {
        retrieveUserInfo();
    }, [retrieveUserInfo]);

    const signOut = () => {
        dispatch(changeTabName(tabConstants.SIGNOUT_TAB));
        dispatch(changeAuthenTabStatus(true));
    };

    return (
        <>
            {userInfo && userInfo.data && (
                <div>
                    <div className="flex items-center relative user-button p-2 rounded-full hover:bg-gray-200 duration-200 ease-in grow-0 shrink-0">
                        <img
                            src={
                                userInfo.data.user_contact?.avatar ||
                                authenticationConstants.NO_AVATAR
                            }
                            alt="user-img"
                            className="h-6 w-6 rounded-full object-cover"
                        />
                        <span className="mx-2 font-bold text-sm">
                            {userInfo.data.user_contact?.first_name ??
                                authenticationConstants.NO_FIRST_NAME}
                        </span>
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
                        <div className="hidden absolute top-12 right-0 user-button-dropdown bg-white my-shadow w-60 text-left text-sm rounded-lg">
                            <Link to={"/test"}>
                                <div className="w-auto m-2 p-2 rounded-xl hover:bg-gray-200 cursor-pointer">
                                    <div className="flex items-center">
                                        <img
                                            src={
                                                userInfo.data.user_contact
                                                    ?.avatar ||
                                                authenticationConstants.NO_AVATAR
                                            }
                                            alt="user-img"
                                            className="h-16 w-16 rounded-full object-cover"
                                        />
                                        <div className="ml-2">
                                            <div className="text-md font-bold one-line-text w-32">
                                                <span>
                                                    {userInfo.data.user_contact
                                                        ?.first_name ??
                                                        authenticationConstants.NO_FIRST_NAME}{" "}
                                                    {userInfo.data.user_contact
                                                        ?.last_name ??
                                                        authenticationConstants.NO_LAST_NAME}
                                                </span>
                                            </div>
                                            {userInfo.data.username && (
                                                <div className="text-xs font-medium one-line-text w-32">
                                                    @{userInfo.data.username}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            {/* {userInfo.role === "Admin" && (
                                <>
                                    <div className="break-content"></div>
                                    <div
                                        className="user-button-dropdown-item"
                                    >
                                        Admin Dashboard
                                    </div>
                                </>
                            )}
                            {userInfo.role === "Seller" && (
                                <>
                                    <div className="break-content"></div>
                                    <div
                                        className="user-button-dropdown-item"
                                    >
                                        Your shop
                                    </div>
                                </>
                            )} */}
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
                            <div
                                className="user-button-dropdown-item"
                                onClick={signOut}
                            >
                                Sign out
                            </div>
                            <div className="w-full h-2 block"></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default UserProfile;
