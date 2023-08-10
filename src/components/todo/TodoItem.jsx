import { useState } from "react";
import { useTodoContext } from "../../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { id, todo: todoText, isCompleted } = todo;
  const [isEdit, setIsEdit] = useState(false);
  const [editTodoInput, setEditTodoInput] = useState(todoText);

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

  const onClickEditStatus = () => {
    setIsEdit(true);
  };

  const handleChange = (e) => {
    setEditTodoInput(e.target.value);
  };

  const onClickSubmitBtn = () => {
    handleUpdateTodo(id, { todo: editTodoInput, isCompleted });
    setIsEdit(false);
  };

  const onClickCancleBtn = () => {
    setEditTodoInput(todoText);
    setIsEdit(false);
  };

  return (
    <>
      {!isEdit ? (
        <li>
          <label>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={handleCheckBoxChange}
            />
            <span
              style={{
                textDecoration: isCompleted ? "line-through" : "none",
              }}
            >
              {todoText}
            </span>
          </label>
          <button data-testid="modify-button" onClick={onClickEditStatus}>
            수정
          </button>
          <button data-testid="delete-button" onClick={onClickeRemoveTodo}>
            삭제
          </button>
        </li>
      ) : (
        <li>
          <input
            data-testid="modify-input"
            id="modify-input"
            name="modify-input"
            type="text"
            value={editTodoInput}
            onChange={handleChange}
          />
          <button data-testid="submit-button" onClick={onClickSubmitBtn}>
            제출
          </button>
          <button data-testid="cancel-button" onClick={onClickCancleBtn}>
            취소
          </button>
        </li>
      )}
    </>
  );
};
export default TodoItem;
