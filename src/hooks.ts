import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { AppDispatch, RootState } from "./store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;