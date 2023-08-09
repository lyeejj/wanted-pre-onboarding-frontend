import { useTodoContext } from "../../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { id, todo: todoText, isCompleted } = todo;

  const { handleUpdateTodo, handleDeleteTodo } = useTodoContext();

  const handleCheckBoxChange = async (e) => {
    const isChecked = e.target.checked;
    console.log(isChecked);
    handleUpdateTodo(id, { todo: todoText, isCompleted: isChecked });
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
        <button data-testid="delete-button">삭제</button>
      </li>
    </ul>
  );
};
export default TodoItem;
