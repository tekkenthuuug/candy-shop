import { useState } from "react";

const useLoginForm = (onSubmit) => {
  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    onSubmit();
  };

  const handleInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    values,
  };
};
export default useLoginForm;
