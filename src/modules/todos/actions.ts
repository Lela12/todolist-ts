//액션 타입 선언
export const ADD_TODO = "ADD_TODO" as const;
export const COMPLETE_TODO = "COMPLETE_TODO" as const;
export const DELETE_TODO = "DELETE_TODO" as const;
export const UPDATE_TODO = "UPDATE_TODO" as const;

// 액션 생성함수 선언

export const AddTodo = (text: string) => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

export const CompleteTodo = (id: number) => {
  return {
    type: COMPLETE_TODO,
    payload: id,
  };
};

export const DeleteTodo = (id: number) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const UpdateTodo = (id: number, text: string) => {
  return {
    type: UPDATE_TODO,
    payload: {
      id,
      text,
    },
  };
};

//액션들의 타입스크립트 타입 준비
export type TodosAction =
  | ReturnType<typeof AddTodo>
  | ReturnType<typeof CompleteTodo>
  | ReturnType<typeof DeleteTodo>
  | ReturnType<typeof UpdateTodo>;
