import React, { useState, useReducer } from "react";
import TodoReducer from "../reducers/todoReducer";
import { filteredTask } from "../utils/filterTasks";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(TodoReducer, [], init);
  const [filter, setFilter] = useState("all");
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleAddTodo = (newTodo) => {
    dispatch({ type: "add", payload: newTodo });
  };

  const handleEditTodo = (updateTodo) => {
    dispatch({ type: "edit", payload: updateTodo });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const handleCompletedTodo = (id) => {
    dispatch({ type: "completed", payload: id });
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return {
    todos: filteredTask(todos, filter),
    filter,
    setFilter,
    handleAddTodo,
    handleEditTodo,
    selectedTodo,
    setSelectedTodo,
    handleDeleteTodo,
    handleCompletedTodo,
    handleFilterChange,
  };
};
