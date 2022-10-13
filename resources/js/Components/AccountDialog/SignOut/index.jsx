import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function index(props) {
    const dispatch = useDispatch();
    const confirmSignOut = () => {
        dispatch({type: 'REMOVE_TOKEN'});
        cancelSignOut();
    }
    const cancelSignOut = () => {
        props.setShow(false);
        props.setTab(0);
    }
    return (
        <>
            <p className="text-xl font-bold text-center py-3">Do you want to sign out?</p>
            <div className="flex mt-2">
                <button className="my-button my-button--primary mr-1"
                onClick={confirmSignOut}>
                    Yes
                </button>
                <button
                    className="my-button my-button--secondary ml-1"
                    onClick={cancelSignOut}
                >
                    No
                </button>
            </div>
        </>
    );
}

export default index;
