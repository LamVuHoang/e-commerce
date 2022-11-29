import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { exceptionConstants, tabConstants } from "../../../Store/Constants";
import { changeLoginStatus } from "../../../Store/Reducers/authentication.reducer";
import { useEffect } from "react";
import {
    changeTabName,
    resetDefaultTab,
} from "../../../Store/Reducers/tab.reducer";
import { signUpUser } from "../../../Store/Actions";
const Index: React.FC = () => {
    const dispatch = useDispatch();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [invalid, setInvalid] = useState([]);

    const newSignUpResult = useSelector(
        (state) => state.authenticationReducer.signUpResult
    );

    useEffect(() => {
        console.log("newSignUpResult", newSignUpResult)
        // if (newSignUpResult.code === exceptionConstants.CREATED) {
        //     window.localStorage.setItem(
        //         "token",
        //         newSignUpResult.data.token
        //     );
        //     dispatch(changeLoginStatus(true));
        //     dispatch(resetDefaultTab());
        // } else {
        //     // newSignUpResult.code === exceptionConstants.SUCCESS &&
        //     // setInvalid(newSignUpResult.message);
        // }
    }, [newSignUpResult]);

    const onSubmit = (data) => {
        const payload = {
            username: data.username,
            password: data.password,
            password_confirmation: data.confirm,
        };

        dispatch(signUpUser(payload));
    };

    const handleClickLogInTab = () => {
        setInvalid([]);
        dispatch(changeTabName(tabConstants.LOGIN_TAB));
    };
    return (
        <>
            <p className="text-xl font-bold text-center py-3">Sign Up</p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                onChange={() => setInvalid([])}
            >
                <input
                    type="text"
                    {...register("username", {
                        required: "You must specify an username",
                    })}
                    className="w-full block my-input"
                    placeholder="Username"
                />
                {errors.username && (
                    <p role="alert" className="mt-1 text-red-800 px-3 text-xs">
                        {errors.username.message}
                    </p>
                )}
                {invalid?.username && (
                    <p role="alert" className="mt-1 text-red-800 px-3 text-xs">
                        {invalid?.username}
                    </p>
                )}
                <input
                    type="password"
                    {...register("password", {
                        required: "You must specify a password",
                    })}
                    className="w-full block my-input"
                    placeholder="Password"
                />
                {errors.password && (
                    <p role="alert" className="mt-1 text-red-800 px-3 text-xs">
                        {errors.password.message}
                    </p>
                )}
                <input
                    type="password"
                    {...register("confirm", {
                        required: "You must confirm your password",
                    })}
                    className="w-full block my-input"
                    placeholder="Confirm Password"
                />
                {errors.confirm && (
                    <p role="alert" className="mt-1 text-red-800 px-3 text-xs">
                        {errors.confirm.message}
                    </p>
                )}
                {invalid?.password_confirmation && (
                    <p role="alert" className="mt-1 text-red-800 px-3 text-xs">
                        {invalid?.password_confirmation}
                    </p>
                )}
                {invalid?.password && (
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
                            {invalid?.password}
                        </>
                    </span>
                )}
                <input
                    type="submit"
                    value="Sign Up"
                    className="my-button my-button--primary mb-1 mt-2 disabled:opacity-50 cursor-pointer"
                />
            </form>
            <div className="block border-t-2 border-gray-300 my-3 w-1/2 mx-auto"></div>
            <button
                className="my-button my-button--secondary mb-2 mt-1"
                onClick={handleClickLogInTab}
            >
                Sign In Now
            </button>
        </>
    );
};

export default Index;
