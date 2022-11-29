import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAppSelector from "../../../Hooks/useAppSelector";
import useAppDispatch from "../../../Hooks/useAppDispatch";
import {
    changeTabName,
    resetDefaultTab,
} from "../../../Store/Reducers/tab.reducer";
import { exceptionConstants, tabConstants } from "../../../Store/Constants";
import { logInUser } from "../../../Store/Actions";
import { changeLoginStatus } from "../../../Store/Reducers/authentication.reducer";
const Index: React.FC = () => {
    const dispatch = useAppDispatch();
    const [invalid, setInvalid] = useState("");
    const {
        register,
        formState: { errors },
        handleSubmit,
        resetField,
    } = useForm();

    const newlogInResult = useAppSelector(
        (state) => state.authenticationReducer.logInResult
    );

    useEffect(() => {
        if (newlogInResult.data) {
            // LOGIN SUCCESSFULLY
            dispatch(changeTabName(tabConstants.WAITING_TAB));
            dispatch(changeLoginStatus(true));

            window.localStorage.setItem(
                "token",
                newlogInResult.data.data.token
            );

            dispatch(resetDefaultTab());
        } else {
            setInvalid(newlogInResult.message);
        }
    }, [newlogInResult]);

    const onSubmit = (data: Login) => {
        const params: Login = {
            username: data.username,
            password: data.password,
        };

        dispatch(logInUser(params));
    };

    const handleClickSignUpTab = () => {
        setInvalid("");
        dispatch(changeTabName(tabConstants.SIGNUP_TAB));
    };
    return (
        <>
            <p className="text-xl font-bold text-center py-3">Sign In</p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                onChange={() => setInvalid("")}
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

                {invalid && invalid.length > 0 && (
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
};

export default Index;
