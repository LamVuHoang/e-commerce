import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function index(props) {
    const dispatch = useDispatch();
    const signIn = () => {
        const url = "http://localhost:8000/api/authentication";
        const payload = {
            params: {
                contact: input.username,
                password: input.password,
            },
        };
        axios
            .get(url, payload)
            .then((response) => {
                // console.log(response.data);
                localStorage.setItem('token', response.data.data.token || '')
                dispatch({ type: "UPDATE_TOKEN" });
                props.setShow(false);
                props.setTab(0);
            })
            .catch((error) => {
                let message = error.response.data.message;
                if (typeof message === "object") {
                    message = message.contact[0] || message.password[0];
                }
                setInvalid(message);
            });
    };
    const [input, setInput] = useState({
        username: "",
        password: "",
        changedUsername: false,
        changedPassword: false,
    });
    const [invalid, setInvalid] = useState("");
    const handleChange = (i, value) => {
        switch (i) {
            case 0:
                setInput({ ...input, username: value, changedUsername: true });
                break;
            case 1:
                setInput({ ...input, password: value, changedPassword: true });
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        // console.log(input);
        if (input.changedUsername && input.changedPassword) {
            if (input.username == "" || input.password == "") {
                setInvalid("Please fill in all fields");
            } else {
                setInvalid("");
            }
        }
    }, [input]);
    return (
        <>
            <p className="text-xl font-bold text-center py-3">Sign In</p>
            <div className="relative">
                <input
                    type="text"
                    className="w-full block my-input"
                    placeholder="Username, Email or Phone number"
                    onChange={(e) => handleChange(0, e.target.value)}
                />
                <input
                    type="password"
                    className="w-full block my-input"
                    placeholder="Password"
                    onChange={(e) => handleChange(1, e.target.value)}
                />
                <span className="text-md text-center block text-red-800 font-bold mt-2 h-6">
                    {invalid && (
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
                    )}
                </span>
                <button
                    className="my-button my-button--primary mb-1 mt-2 disabled:opacity-50"
                    onClick={signIn}
                    disabled={
                        invalid === "" &&
                        input.changedPassword &&
                        input.changedUsername
                            ? false
                            : true
                    }
                >
                    Sign In
                </button>

                <button
                    className="my-button my-button--secondary mb-2 mt-1"
                    onClick={() => props.setTab(1)}
                >
                    Sign Up Now
                </button>
            </div>
        </>
    );
}

export default index;
