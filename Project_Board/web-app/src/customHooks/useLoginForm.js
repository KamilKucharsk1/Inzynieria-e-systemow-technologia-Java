import { useState, useEffect } from "react";

const validate = values => {
  const errors = {};

  if (!values.login) {
    errors.login = "Please provide login.";
  }

  if (!values.password) {
    errors.password = "Please provide password.";
  }

  return errors;
};

const useForm = initial => {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({ login: null, password: null });
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (touched.login && touched.password) {
      setErrors(validate(values));
    }
  }, [values]);

  const updateValue = e => {
    setTouched({ ...touched, [e.target.name]: true });
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = (e, callback) => {
    e.preventDefault();
    setErrors(validate(values));

    if (Object.keys(errors).length === 0) {
      callback(values);
    }
  };

  return [updateValue, submitHandler, errors];
};

export default useForm;
