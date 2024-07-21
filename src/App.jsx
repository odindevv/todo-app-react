import { useEffect, useState, useReducer } from "react";

import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Task } from "./components/Task";
import { Modal } from "./components/Modal";

import { useTodo } from "./hooks/useTodo";
import { useToggleTheme } from "./hooks/useToggleTheme";
import { useModal } from "./hooks/useModal";

import "./App.css";

function App() {
  const {
    todos,
    filter,
    handleAddTodo,
    handleDeleteTodo,
    handleEditTodo,
    handleCompletedTodo,
    handleFilterChange,
    selectedTodo,
    setSelectedTodo,
  } = useTodo();

  const { handleToggle, setIsBlackMode } = useToggleTheme();
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleOpenModal = (todo = null) => {
    setSelectedTodo(todo);
    openModal();
  };

  const handleCloseModal = () => {
    setSelectedTodo(null);
    closeModal();
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const savedMode = localStorage.getItem("color-mode");
    if (savedMode === "black") {
      setIsBlackMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  return (
    <div className="todo container">
      <Header openModal={openModal} toggle={handleToggle} />
      <Modal
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        handleAddTodo={handleAddTodo}
        handleEditTodo={handleEditTodo}
        selectedTodo={selectedTodo}
      />
      <Aside handleFilterChange={handleFilterChange} filter={filter} />
      <Task
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleCompletedTodo={handleCompletedTodo}
        openModal={handleOpenModal}
      />
    </div>
  );
}

export default App;
