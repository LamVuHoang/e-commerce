import React, { useState } from "react";
import useAppSelector from "../../../Hooks/useAppSelector";
import useAppDispatch from "../../../Hooks/useAppDispatch";
import { useForm } from "react-hook-form";
import { tabConstants } from "../../../Store/Constants";
import { changeSigninStatus } from "../../../Store/Reducers/authentication.reducer";
import { useEffect } from "react";
import {
    changeTabName,
    resetDefaultTab,
} from "../../../Store/Reducers/tab.reducer";
import { signUpUser } from "../../../Store/Actions";
import AppReponse from "../../../Type/AppResponse.type";
import Signup from "../../../Type/Signup.type";
const Index: React.FC = () => {
    const dispatch = useAppDispatch();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [invalid, setInvalid] = useState<{
        username?: string[];
        password?: string[];
        password_confirmation?: string[];
        signin?: string;
    }>({});

    const newSignUpResult = useAppSelector<AppReponse>(
        (state) => state.authenticationReducer.signUpResult
    );

    const signUpFetching = useAppSelector<boolean>(
        (state) => state.authenticationReducer.signUpFetching
    );

    useEffect(() => {
        console.log("newSignUpResult", newSignUpResult);
        
        // if (newSignUpResult.data) {
        //     window.localStorage.setItem(
        //         "token",
        //         newSignUpResult.data.data.token
        //     );
        //     dispatch(changeSigninStatus(true));
        //     dispatch(resetDefaultTab());
        // } else {
        //     setInvalid(newSignUpResult.message);
        // }
    }, [newSignUpResult]);

    const onSubmit = (data) => {
        const payload: Signup = {
            username: data.username,
            password: data.password,
            password_confirmation: data.confirm,
        };

        dispatch(signUpUser(payload));
    };

    const handleClickSigninTab = () => {
        setInvalid({});
        dispatch(changeTabName(tabConstants.SIGNIN_TAB));
    };
    return (
        <>
            <p className="text-xl font-bold text-center py-3">Sign Up</p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                onChange={() => setInvalid({})}
            >
                <input
                    type="text"
                    {...register("username", {
                        required: "You must specify an username",
                    })}
                    className="w-full block my-input"
                    placeholder="Username"
                />
                {(errors.username || invalid?.username) && (
                    <p role="alert" className="mt-1 text-red-800 px-3 text-sm">
                        {errors.username.message || invalid.username}
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
                {(errors.password || invalid?.password) && (
                    <p role="alert" className="mt-1 text-red-800 px-3 text-sm">
                        {errors.password.message || invalid.password}
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
                {(errors.confirm || invalid?.password_confirmation) && (
                    <p role="alert" className="mt-1 text-red-800 px-3 text-sm">
                        {errors.confirm.message ||
                            invalid.password_confirmation}
                    </p>
                )}
                {invalid && invalid.signin && (
                    <span className="text-center text-red-400 text-md">
                        {invalid.signin[0]}
                    </span>
                )}
                {signUpFetching && (
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="ml-auto mr-auto block w-10 h-10 animate-spin text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                            />
                        </svg>
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
                onClick={handleClickSigninTab}
            >
                Sign In Now
            </button>
        </>
    );
};

export default Index;
