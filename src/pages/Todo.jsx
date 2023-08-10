import { useState, useEffect } from "react";
import { useTodoContext } from "../context/TodoContext";
import TodoItem from "../components/todo/TodoItem";

const Todo = () => {
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
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={onClickAddTodo}>
        <input
          data-testid="new-todo-input"
          id="new-todo-input"
          name="new-todo-input"
          value={todoInput}
          onChange={handleChange}
        />
        <button data-testid="new-todo-add-button" type="submit">
          추가
        </button>
      </form>
      <ul>
        {todos.length &&
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </>
  );
};
export default Todo;
