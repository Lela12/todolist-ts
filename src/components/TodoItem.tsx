import {
  MdCheckBox,
  MdClear,
  MdCheckBoxOutlineBlank,
  MdEdit,
} from "react-icons/md";
import styled from "styled-components";
import React, { useCallback, useState } from "react";
import useTodoActions from "../hooks/useTodoActions";
import { Todo } from "../modules/todos/reducer";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const { onToggle, onRemove, onUpdate } = useTodoActions(todo.id, todo.text);
  const [readOnly, setReadOnly] = useState(true);
  const [inputs, setInputs] = useState(todo.text);
  // const [testText, setTestText] = useState(text);

  //useCallback 함수 재사용
  //리렌더링 될때마다 새로 만들어짐을 방지하기 위해
  //함수안에 사용하는 상태가 있으면 deps배열안에 넣어주기!
  const onChangeText = useCallback(
    (e) => {
      setInputs(e.target.value);
    },
    [inputs]
  );

  const updateTodo = () => {
    if (!todo.isCompleted) {
      //텍스트를 수정할 수 있도록
      setReadOnly(false);
    }
  };

  return (
    <Container>
      <CheckBox onClick={onToggle}>
        {todo.isCompleted ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </CheckBox>
      <Text
        name="text" //하나의 함수로 관리할 수 있게끔
        checked={todo.isCompleted}
        readOnly={readOnly}
        defaultValue={todo.text}
        onChange={onChangeText}
        //포커스가 사라지면 변경된 텍스트 값을
        //dispatch를 사용해 스토어에 반영해준다.
        onBlur={updateTodo}
      />
      <IconWrap>
        {!todo.isCompleted && (
          <EditButton onClick={updateTodo}>
            <MdEdit />
          </EditButton>
        )}
        <DeleteButton onClick={onRemove}>
          <MdClear />
        </DeleteButton>
      </IconWrap>
    </Container>
  );
};

export default TodoItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-bottom: 1px solid lightgray;
`;

const CheckBox = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

const Text = styled.input`
  border: none;
  flex: 1;
  font-size: 20px;
  margin: 0.4rem;
  text-decoration: ${(props) => (props.checked ? " line-through" : "none")};
`;

const IconWrap = styled.span`
  display: flex;
  position: relative;
  right: -1px;
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: lightcoral;
  font-size: 1.3rem;
  cursor: pointer;
  border: none;
  background: none;
`;

const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  border: none;
  margin-right: 5px;
  cursor: pointer;
  background: none;
`;
