import edit from "../assets/edit.svg";
import trash from "../assets/trash.svg";

export const TaskItem = ({
  todo,
  handleDeleteTodo,
  handleCompletedTodo,
  openModal,
}) => {
  return (
    <div className="task__item">
      <div className="task__top">
        <h1 className={`task_title ${todo.check && "completed"}`}>
          {todo.title}
        </h1>
        <div className="" style={{ display: "flex" }}>
          <img
            src={edit}
            alt=""
            className="task__options"
            onClick={() => openModal(todo)}
          />
          <img
            src={trash}
            alt=""
            className="task__options"
            onClick={() => handleDeleteTodo(todo.id)}
          />
        </div>
      </div>
      <p className="task__description">{todo.description}</p>
      <div className="task__bottom">
        <ul className="circles__task">
          <li>
            <span className={`circle__color circle__color--red`}></span>
          </li>
        </ul>
        <div className="task__completed">
          <input
            type="checkbox"
            className="task__checkbox--completed"
            id=""
            checked={todo.check}
            onChange={() => handleCompletedTodo(todo.id)}
          />
          <p>Done</p>
        </div>
      </div>
    </div>
  );
};
