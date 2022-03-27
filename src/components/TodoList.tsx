import useTodos from "../hooks/useTodos";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
