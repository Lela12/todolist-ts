import Form from "./components/Form";
import TodoList from "./components/TodoList";
import styled from "styled-components";

const Container = styled.div`
  width: 600px;
  background: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: none;
  outline: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Title = styled.div`
  padding: 2rem;
  padding-bottom: 5px;
  font-size: 4.5rem;
  text-align: center;
  font-weight: 500;
  color: #ead7d7;
`;

function App() {
  return (
    <>
      <Title>todos</Title>
      <Container>
        <Form />
        <TodoList />
      </Container>
    </>
  );
}

export default App;
