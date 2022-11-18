import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
    getUserInfo,
    logInUser,
} from "../../../Store/Actions/authentication.action";
import {
    exceptionConstants,
    authenticationConstants,
    tabConstants,
} from "../../../Store/Constants";
function index(props) {
    const dispatch = useDispatch();
    const [invalid, setInvalid] = useState("");
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const newlogInResult = useSelector(
        (state) => state.authenticationReducer.newToken
    );
    useEffect(() => {
        if (newlogInResult.status === exceptionConstants.SUCCESS) {
            // If INVALID CREDENTIALS
            let message = newlogInResult.message;
            if (typeof message === "object") {
                if (message.contact) {
                    setInvalid(message.contact[0]);
                } else if (message.password) {
                    setInvalid(message.password[0]);
                }
            } else {
                setInvalid(message);
            }
        } else if (newlogInResult.status === exceptionConstants.CREATED) {
            // LOGIN SUCCESSFULLY
            window.localStorage.setItem("token", newlogInResult.data.token);

            props.setTab(tabConstants.WAITING_TAB);
            setTimeout(() => {
                props.setShow(false);
                props.setTab(tabConstants.LOGIN_TAB);
            }, 1000);
            dispatch(getUserInfo());
        }

        // return () => {
        // };
    }, [newlogInResult]);

    const onSubmit = (data) => {
        const params = {
            contact: data.username,
            password: data.password,
        };

        dispatch(logInUser(params));
    };

    const handleClickSignUpTab = () => {
        dispatch({
            type: tabConstants.CHANGE_TAB_NAME,
            payload: tabConstants.SIGNUP_TAB,
        });
    };
    return (
        <>
            <p className="text-xl font-bold text-center py-3">Sign In</p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                onChange={() => setInvalid(false)}
            >
                <input
                    type="text"
                    {...register("username", {
                        required: "Username is required",
                    })}
                    className="w-full block my-input"
                    placeholder="Username, Email or Phone"
                />
                {errors.username && (
                    <p role="alert" className="mt-1 text-red-800 px-3 text-xs">
                        {errors.username.message}
                    </p>
                )}
                <input
                    type="password"
                    {...register("password", {
                        required: "Password is required",
                    })}
                    className="w-full block my-input"
                    placeholder="Password"
                />
                {errors.password && (
                    <p role="alert" className="mt-1 text-red-800 px-3 text-xs">
                        {errors.password.message}
                    </p>
                )}
                {invalid && (
                    <span className="text-md text-center block text-red-800 font-bold mt-2 h-6">
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 inline-block text-red-800 mr-1 stroke-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                />
                            </svg>
                            {invalid}
                        </>
                    </span>
                )}
                <input
                    type="submit"
                    value="Sign In"
                    className="my-button my-button--primary mb-1 mt-2 disabled:opacity-50 cursor-pointer"
                />
            </form>
            <div className="block border-t-2 border-gray-300 my-3 w-1/2 mx-auto"></div>

            <button
                className="my-button my-button--secondary mb-2 mt-1"
                onClick={handleClickSignUpTab}
            >
                Sign Up Now
            </button>
        </>
    );
}

export default index;
