import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../Store/Actions";

const Index: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserInfo());
    }, []);

    return (
        <>
            Test
            <br />
        </>
    );
};

export default Index;
