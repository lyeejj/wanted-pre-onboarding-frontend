export const todoReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return { ...state, todos: action.payload };
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, todo: action.payload.updateTodo }
            : todo
        ),
      };
    default:
      return state;
  }
};
