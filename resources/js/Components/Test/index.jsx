import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../Store/Actions/authentication.action";

export default function index() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserInfo());
    }, []);
    const data = useSelector((state) => state.authenticationReducer);

    return (
        <>
            Test
            <br />
            {console.log(data)}
        </>
    );
}
