import { useState } from "react";
import { useTodoContext } from "../../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { id, todo: todoText, isCompleted } = todo;
  const [isEdit, setIsEdit] = useState(false);

  const { handleUpdateTodo, handleDeleteTodo } = useTodoContext();

  const handleCheckBoxChange = async (e) => {
    const isChecked = e.target.checked;
    handleUpdateTodo(id, { todo: todoText, isCompleted: isChecked });
  };

  const onClickeRemoveTodo = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      handleDeleteTodo(id);
    }
  };

  return (
    <ul>
      <li>
        <label>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleCheckBoxChange}
          />
          <span
            style={{ textDecoration: isCompleted ? "line-through" : "none" }}
          >
            {todoText}
          </span>
        </label>
        <button data-testid="modify-button">수정</button>
        <button data-testid="delete-button" onClick={onClickeRemoveTodo}>
          삭제
        </button>
      </li>
    </ul>
  );
};
export default TodoItem;
