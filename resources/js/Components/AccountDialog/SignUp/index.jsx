import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../../Store/Reducers/userReducer/userAction";
import { useForm } from "react-hook-form";
import axios from "axios";

function index(props) {
    const dispatch = useDispatch();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [invalid, setInvalid] = useState("");

    const onSubmit = (data) => {
        const url = "http://localhost:8000/api/authentication";
        if (data.password == data.confirm) {
            const payload = {
                username: data.username,
                password: data.password,
                password_confirmation: data.confirm,
            };
            axios
                .post(url, payload)
                .then((response) => {
                    // console.log(response.data);
                    dispatch(fetchUser());
                    props.setTab(4);
                })
                .catch((error) => {
                    let message = error.response.data.message;
                    console.log("msg", message);
                    if (typeof message === "object") {
                        if (message.username) {
                            setInvalid(message.username[0]);
                        } else if (message.password) {
                            setInvalid(message.password[0]);
                        } else if (message.password_confirmation) {
                            setInvalid(message.password_confirmation[0]);
                        }
                    }
                });
        } else {
            setInvalid("Passwords do not matched!");
        }
    };

    return (
        <>
            <p className="text-xl font-bold text-center py-3">Sign Up</p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                onChange={() => setInvalid(false)}
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
                    value="Sign Up"
                    className="my-button my-button--primary mb-1 mt-2 disabled:opacity-50 cursor-pointer"
                />
            </form>
            <div className="block border-t-2 border-gray-300 my-3 w-1/2 mx-auto"></div>
            <button
                className="my-button my-button--secondary mb-2 mt-1"
                onClick={() => props.setTab(0)}
            >
                Sign In Now
            </button>
        </>
    );
}

export default index;
