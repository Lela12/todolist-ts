//현재상태, 전달받은 액션을 참고해서 새로운 상태를 환원하는 함수
import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  TodosAction,
} from "./actions"; //액션타입

export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export type TodosState = Todo[];

//초기 상태
const INITAIL_STATE: TodosState = [{ id: 1, text: "dd", isCompleted: true }];

const reducer = (
  state: TodosState = INITAIL_STATE,
  action: TodosAction
): TodosState => {
  switch (action.type) {
    case ADD_TODO:
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      console.log(ADD_TODO);
      return state.concat({
        id: nextId,
        text: action.payload,
        isCompleted: false,
      });

    case COMPLETE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, text: action.payload.text };
        }
        return todo;
      });

    default:
      return state;
  }
};

export default reducer;
