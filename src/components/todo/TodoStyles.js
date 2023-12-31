import styled from "styled-components";

export const TodoListTemplate = styled.div`
  padding: 50px;
  margin: 5rem auto;
  max-width: 960px;
  height: 60vh;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const TodoForm = styled.form`
  input {
    margin: 16px;
    padding: 8px;
    border: none;
    border-bottom: 1px solid #8a8a8a;
    background-color: transparent;
    font-size: 1.2rem;
    color: #2a2a2a;
  }

  button {
    padding: 10px 18px;
    border: none;
    border-radius: 10px;
    background-color: #1fb845;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
  }
`;

export const TodoListContainer = styled.ul`
  padding: 16px;
  width: 340px;
  height: 300px;
  overflow: auto;

  li {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 1.1rem;
  }

  button {
    margin: 0 5px;
    padding: 2px 6px;
    border: 1px solid #1fb845;
    border-radius: 8px;
    font-size: 14px;
    color: #1fb845;
    cursor: pointer;
  }

  button:hover {
    background-color: #1fb845;
    color: #fff;
  }
`;
