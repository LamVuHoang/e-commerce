import React, { useEffect, useState } from "react";

function index(props) {
    return (
        <>
            <p className="text-xl font-bold text-center py-3">Sign Up</p>
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
                <input
                    type="password"
                    className="w-full block my-input"
                    placeholder="Confirm password"
                />
                <button className="my-button my-button--primary mb-1 mt-5">
                    Sign Up
                </button>
                <p className="text-sm text-center block">You had an account?</p>
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
