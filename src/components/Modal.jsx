import { useEffect, useState } from "react";
import Select from "react-select";
import { options } from "../utils/constant";
import { useForm } from "../hooks/useForm";

export const Modal = ({
  isOpen,
  closeModal,
  handleAddTodo,
  handleEditTodo,
  selectedTodo,
}) => {
  if (!isOpen) return null;
  const { values, setValues, handleInputChange, validate, error } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    if (values.id) {
      handleEditTodo(values);
    } else {
      const newTodo = {
        id: Date.now(),
        title: values.title,
        description: values.description,
        check: false,
      };

      handleAddTodo(newTodo);
    }
    closeModal();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValues(selectedTodo);
    } else {
      setValues({ title: "", description: "", id: null, check: false });
    }
  }, [selectedTodo]);

  return (
    <div className="overlay">
      <form className="popupBody" onSubmit={handleSubmit}>
        <div className="popup__top">
          <button
            className="btn__popup btn__popup--cancel"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button type="submit" className="btn__popup btn__popup--add">
            {selectedTodo ? "Save" : "Add"}
          </button>
        </div>
        <p style={{ color: "tomato", fontSize: "1.1em" }}>{error}</p>
        <div className="popup__task">
          <h2 className="popup__title">Title</h2>
          <input
            type="text"
            name="title"
            id=""
            placeholder="add a title ..."
            className="popup__input popup__input--title"
            value={values.title}
            onChange={() => handleInputChange(event)}
          />
          <h2 className="popup__title">Description</h2>
          <textarea
            name="description"
            id=""
            placeholder="add a description ..."
            className="popup__input popup__input--textarea"
            onChange={() => handleInputChange(event)}
            value={values.description}
          ></textarea>
        </div>

        <div className="task__end">
          <h2 className="popup__title" style={{ marginBottom: "10px" }}>
            Tags
          </h2>
          <Select options={options} isMulti />
        </div>
      </form>
    </div>
  );
};
