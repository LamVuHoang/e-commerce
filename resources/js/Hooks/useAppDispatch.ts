import { useDispatch } from "react-redux";
import type { AppDispatch } from "../Store/store";

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
