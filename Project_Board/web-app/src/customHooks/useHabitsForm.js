import { useState, useEffect } from "react";

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "Please provide name.";
  }

  if (!values.description) {
    errors.description = "Please provide description.";
  }

  return errors;
};

const useForm = initial => {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({
    name: null,
    description: null
  });
  const [duration, setDuration] = useState([]);
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (touched.name && touched.description) {
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

    if (Object.keys(errors).length === 0 && duration.length > 0) {
      console.log("Sending...", values, duration);
      callback();
    }
  };

  return [updateValue, duration, setDuration, submitHandler, errors];
};

export default useForm;
