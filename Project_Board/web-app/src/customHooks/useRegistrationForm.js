import { useState, useEffect } from "react";

const validate = values => {
  const errors = [];

  if (!values.login) {
    errors.push("Please provide the login");
  }

  if (!values.password) {
    errors.push("Please provide the password");
  }

  return errors;
};

const useForm = initial => {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setErrors(validate(values));
  }, [values]);

  const updateValue = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();

    if (errors.length === 0) {
      console.log("Sending...", values);
    }
  };

  return [updateValue, submitHandler, errors];
};

export default useForm;
