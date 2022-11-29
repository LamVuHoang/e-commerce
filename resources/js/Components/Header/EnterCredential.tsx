import useAppDispatch from "../../Hooks/useAppDispatch";
import { changeTabStatus } from "../../Store/Reducers/tab.reducer";
const EnterCredential: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleOpenDialog = () => {
        dispatch(changeTabStatus(true));
    };

    return (
        <>
            <button
                className="flex items-center relative user-button py-1 px-2 rounded-full hover:bg-gray-200 duration-200 ease-in"
                onClick={handleOpenDialog}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                </svg>

                <div className="flex flex-col pl-2">
                    <span className="text-left font-bold text-sm -mb-1">
                        Sign in
                    </span>
                    <span className="text-left text-xs">or Sign up</span>
                </div>
            </button>
        </>
    );
};

export default EnterCredential;
