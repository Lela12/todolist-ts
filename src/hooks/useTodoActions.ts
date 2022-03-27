import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { CompleteTodo, DeleteTodo, UpdateTodo } from "../modules/todos";

export default function useTodoActions(id: number, text: string) {
  const dispatch = useDispatch();

  const onToggle = useCallback(
    () => dispatch(CompleteTodo(id)),
    [dispatch, id]
  );
  const onRemove = useCallback(() => dispatch(DeleteTodo(id)), [dispatch, id]);
  const onUpdate = useCallback(
    () => dispatch(UpdateTodo(id, text)),
    [dispatch, id, text]
  );

  return { onToggle, onRemove, onUpdate };
}
