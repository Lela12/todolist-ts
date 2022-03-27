import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { AddTodo } from "../modules/todos";

//새로운 할일을 동록하는 함수
export const useAddTodo = () => {
  const dispatch = useDispatch();
  return useCallback((text) => dispatch(AddTodo(text)), [dispatch]);
};
