export const filteredTask = (todos, filter) => {
  return todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.check;
    if (filter === "pending") return !todo.check;
  });
};
