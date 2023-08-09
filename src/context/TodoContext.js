import { createContext, useReducer, useContext } from "react";
import { todoReducer } from "./todoReducer";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../lib/apis/todo";

const initialState = {
  todos: [],
};

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const fetchTodos = async () => {
    try {
      const todos = await getTodos();
      dispatch({ type: "FETCH_TODOS", payload: todos });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    }
  };

  const handleAddTodo = async (todoInput) => {
    try {
      const newTodo = await createTodo(todoInput);
      dispatch({ type: "FETCH_TODOS", payload: newTodo });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    }
  };

  const handleUpdateTodo = async (id, data) => {
    try {
      const { todo: updatedTodo, isCompleted } = await updateTodo(id, data);
      dispatch({
        type: "UPDATE_TODO",
        payload: { id, updatedTodo, isCompleted },
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      dispatch({ type: "REMOVE_TODO", payload: id });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        fetchTodos,
        handleAddTodo,
        handleUpdateTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};
