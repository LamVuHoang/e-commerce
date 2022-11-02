import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../Store/Actions/user.action";

export default function index() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserInfo());
    }, []);
    const data = useSelector((state) => state.userReducer);

    return (
        <>
            Test
            <br />
            {console.log(data)}
        </>
    );
}
