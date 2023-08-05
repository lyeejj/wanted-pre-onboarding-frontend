import axiosInstance from "./instance";

export const createTodo = (data) => {
  return axiosInstance.post("/todos", data);
};

export const getTodos = () => {
  return axiosInstance.get("/todos");
};

export const updateTodo = (id, data) => {
  return axiosInstance.put(`/todos/${id}`, data);
};

export const deleteTodo = (id) => {
  return axiosInstance.delete(`/todos/${id}`);
};
