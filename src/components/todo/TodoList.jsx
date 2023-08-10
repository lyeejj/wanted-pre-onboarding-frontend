import { useState, useEffect } from "react";
import { useTodoContext } from "../../context/TodoContext";
import TodoItem from "./TodoItem";
import {
  TodoListTemplate,
  Title,
  TodoForm,
  TodoListContainer,
} from "./TodoStyles";

const TodoList = () => {
  const [todoInput, setTodoInput] = useState("");
  const { todos, fetchTodos, handleAddTodo } = useTodoContext();

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const onClickAddTodo = (e) => {
    e.preventDefault();
    handleAddTodo({ todo: todoInput });
    setTodoInput("");
  };

  return (
    <TodoListTemplate>
      <Title>Todo List</Title>
      <TodoForm onSubmit={onClickAddTodo}>
        <input
          data-testid="new-todo-input"
          id="new-todo-input"
          name="new-todo-input"
          value={todoInput}
          onChange={handleChange}
          autoComplete="off"
        />
        <button data-testid="new-todo-add-button" type="submit">
          추가
        </button>
      </TodoForm>
      <TodoListContainer>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </TodoListContainer>
    </TodoListTemplate>
  );
};

export default TodoList;
