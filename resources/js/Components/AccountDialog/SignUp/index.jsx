import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function index(props) {
    const [input, setInput] = useState({
        username: "",
        password: "",
        confirm: "",
        changedUsername: false,
        changedPassword: false,
        changedConfirm: false,
    });
    const [invalid, setInvalid] = useState("");
    const dispatch = useDispatch();
    const handleChange = (i, value) => {
        switch (i) {
            case 0:
                setInput({ ...input, username: value, changedUsername: true });
                break;
            case 1:
                setInput({ ...input, password: value, changedPassword: true });
                break;
            case 2:
                setInput({ ...input, confirm: value, changedConfirm: true });
                break;
            default:
                break;
        }
    };
    const signUp = () => {
        if(false){
            props.setShow(false);
            props.setTab(0);
            dispatch({ type: "FETCH_USER" });
        }
        else{
            let invalid = "Something went wrong";
            setInvalid(invalid);
        }
    }
    useEffect(() => {
        console.log(input);
        if (input.changedUsername && input.changedPassword && input.changedConfirm) {
            if(input.username == "" || input.password == "" || input.confirm == ""){
                setInvalid("Please fill in all fields");
            }
            else if (input.password != input.confirm) {
                setInvalid("Password and confirm password do not match");
            }
            else{
                setInvalid("");
            }
        }
    }, [input]);
    return (
        <>
            <p className="text-xl font-bold text-center py-3">Sign Up</p>
            <div className="">
                <input
                    type="text"
                    className="w-full block my-input"
                    placeholder="Username"
                    onChange={(e) => handleChange(0, e.target.value)}
                />
                <input
                    type="password"
                    className="w-full block my-input"
                    placeholder="Password"
                    onChange={(e) => handleChange(1, e.target.value)}
                />
                <input
                    type="password"
                    className="w-full block my-input"
                    placeholder="Confirm password"
                    onChange={(e) => handleChange(2, e.target.value)}
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
                <button className="my-button my-button--primary mb-1 mt-2 disabled:opacity-50"
                    disabled={(invalid === "" && input.changedPassword && input.changedUsername && input.changedConfirm)? false : true}
                    onClick={signUp}
                    >
                    Sign Up
                </button>
                <button
                    className="my-button my-button--secondary mb-2 mt-1"
                    onClick={() => props.setTab(0)}
                >
                    Sign In Now
                </button>
            </div>
        </>
    );
}

export default index;
