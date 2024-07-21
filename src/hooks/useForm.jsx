import { useEffect, useState } from "react";

export const useForm = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    id: null,
    check: false,
  });

  const [error, setError] = useState(null);

  const calculateLengths = () => {
    return {
      title: values.title.trim().length,
      description: values.description.trim().length,
    };
  };

  useEffect(() => {
    validate();
  }, [values]);

  const validate = () => {
    const lengthValues = calculateLengths();

    if (lengthValues.title <= 3) {
      setError("El titulo debe tener mas de 3 caracteres");
      return false;
    }

    if (lengthValues.description <= 5) {
      setError("La descripcion debe tener mas de 3 caracteres");
      return false;
    }

    setError(null);
    return true;
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return { values, setValues, handleInputChange, validate, error };
};
