import { useRef, useState, ChangeEvent, KeyboardEvent } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAddTodo } from "../hooks/useAddTodo";
// import { AddTodo } from "../modules/todos/actions";

const Form = () => {
  const [inputText, setInputText] = useState("");
  const AddTodo = useAddTodo();
  //.current의 기본값

  //store의 상태를 변경시키는 훅

  const onInputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value); //업데이트 되는 input값
  };

  //Enter를 누르면 todo가 추가되게 해준다.
  const onKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      AddTodo(inputText);
    }
  };
  //인풋에 입력값이 없을 경우 alert창을 띄워준다.
  const addTodo = () => {
    if (inputText.length === 0) {
      alert("내용을 입력해주세요");
      return;
    }
    AddTodo(inputText);
    //.current 값의 기본값이되고, 수정, 조회할때는 .current를 조회하면 된다.
    setInputText("");
  };
  console.log(setInputText);

  return (
    <Container>
      <Input
        type="text"
        placeholder="What needs to be done?"
        value={inputText}
        onChange={onInputTextHandler}
        onKeyPress={onKeyPress}
      />
      <Button onClick={addTodo}>추가</Button>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  padding: 1rem;
  border-bottom: 1px solid lightgray;
  display: flex;
  font-size: 1rem;
`;

const Input = styled.input`
  flex: 1;
  outline: none;
  border: none;
  font-size: 1.4rem;

  &:placeholder-shown {
    opacity: 0.3;
    margin-left: 40px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
`;
