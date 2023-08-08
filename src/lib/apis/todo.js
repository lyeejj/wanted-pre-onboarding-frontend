import axiosInstance from "./instance";

export const createTodo = async (data) => {
  const response = await axiosInstance.post("/todos", data);
  return response.data;
};

export const getTodos = async () => {
  const response = await axiosInstance.get("/todos");
  return response.data;
};

export const updateTodo = async (id, data) => {
  const response = await axiosInstance.put(`/todos/${id}`, data);
  return response.data;
};

export const deleteTodo = async (id) => {
  await axiosInstance.delete(`/todos/${id}`);
};
