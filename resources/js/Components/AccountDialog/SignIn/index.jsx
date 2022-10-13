import React, { useEffect, useState } from "react";

function index(props) {
    return (
        <>
            <p className="text-xl font-bold text-center py-3">Sign In</p>
            <div className="">
                <input
                    type="text"
                    className="w-full block my-input"
                    placeholder="Username"
                />
                <input
                    type="password"
                    className="w-full block my-input"
                    placeholder="Password"
                />
                <button className="my-button my-button--primary mb-1 mt-5">
                    Sign In
                </button>
                <p className="text-sm text-center block">You do not have an account?</p>
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
