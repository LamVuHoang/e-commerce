import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAppSelector from "../../../Hooks/useAppSelector";
import useAppDispatch from "../../../Hooks/useAppDispatch";
import {
    changeTabName,
    resetDefaultTab,
} from "../../../Store/Reducers/tab.reducer";
import { tabConstants } from "../../../Store/Constants";
import { signInUser } from "../../../Store/Actions";
import { changeSigninStatus } from "../../../Store/Reducers/authentication.reducer";
import AppReponse from "../../../Type/AppResponse.type";
import Signin from "../../../Type/Signin.type";
const Index: React.FC = () => {
    const dispatch = useAppDispatch();
    const [invalid, setInvalid] = useState<{
        username?: string[];
        password?: string[];
        signin?: string[];
    }>({});
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const newsignInResult = useAppSelector<AppReponse>(
        (state) => state.authenticationReducer.signInResult
    );

    const signInFetching = useAppSelector<boolean>(
        (state) => state.authenticationReducer.signInFetching
    );

    useEffect(() => {
        console.log("newsignInResult", newsignInResult);

        if (newsignInResult.data) {
            // SIGNIN SUCCESSFULLY
            dispatch(changeTabName(tabConstants.WAITING_TAB));
            dispatch(changeSigninStatus(true));

            window.localStorage.setItem("token", newsignInResult.data.token);

            dispatch(resetDefaultTab());
        } else {
            setInvalid(newsignInResult.message);
        }
    }, [newsignInResult]);

    const onSubmit = (data: Signin) => {
        const params: Signin = {
            username: data.username,
            password: data.password,
        };

        dispatch(signInUser(params));
    };

    const handleClickSignUpTab = () => {
        setInvalid({});
        dispatch(changeTabName(tabConstants.SIGNUP_TAB));
    };
    return (
        <>
            <p className="text-xl font-bold text-center py-3">Sign In</p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                onChange={() => setInvalid({})}
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
                    <p role="alert" className="mt-1 text-red-800 px-3 text-sm">
                        {errors.username.message}
                    </p>
                )}

                {invalid && invalid.username && (
                    <p role="alert" className="mt-1 text-red-800 px-3 text-sm">
                        {invalid.username[0]}
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
                    <p role="alert" className="mt-1 text-red-800 px-3 text-sm">
                        {errors.password.message}
                    </p>
                )}

                {invalid && invalid.password && (
                    <p role="alert" className="mt-1 text-red-800 px-3 text-sm">
                        {invalid.password[0]}
                    </p>
                )}

                {invalid && invalid.signin && (
                    <span className="text-md text-center block text-red-800 font-bold mt-2 h-6">
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 inline-block mr-1 stroke-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                />
                            </svg>
                            {invalid.signin[0]}
                        </>
                    </span>
                )}

                {signInFetching && (
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
};

export default Index;
