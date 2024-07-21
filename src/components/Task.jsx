import { TaskItem } from "./TaskItem";

export const Task = ({
  todos,
  handleDeleteTodo,
  handleCompletedTodo,
  openModal,
}) => {
  return (
    <section className="task">
      {todos?.map((todo) => (
        <TaskItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompletedTodo={handleCompletedTodo}
          openModal={openModal}
        />
      ))}
    </section>
  );
};
