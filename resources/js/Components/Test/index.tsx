import { useEffect } from "react";
import useAppDispatch from "../../Hooks/useAppDispatch";
import { getUserInfo } from "../../Store/Actions";

const Index: React.FC = () => {
    const dispatch = useAppDispatch();
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
