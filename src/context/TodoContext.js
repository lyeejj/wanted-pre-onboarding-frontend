import { createContext, useReducer, useContext, useRef } from "react";
import { todoReducer } from "./todoReducer";

const initialState = {
  todos: [],
};

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const nextId = useRef(1);

  return (
    <TodoContext.Provider value={{ state, dispatch, nextId }}>
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
