import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

function index(props) {
    const dispatch = useDispatch();
    const confirmSignOut = () => {
        let token = localStorage.getItem("token");
        // console.log(token);
        const url = "api/logout";
        const config = {
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        axios.post(url, {}, config);
        props.setTab(3);
        localStorage.removeItem("token");
        dispatch({ type: "REMOVE_TOKEN" });
        setTimeout(() => {
            props.setShow(false);
            props.setTab(0);
        }, 300);
    };
    const cancelSignOut = () => {
        props.setShow(false);
        props.setTab(0);
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
}

export default index;
