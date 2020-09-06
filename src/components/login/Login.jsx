import React, { useState } from 'react';

import LoginView from './LoginView';
import StreamPollsAPI from '../../api/StreamPollsAPI';

function Login() {
  const initialFields = { email: '', password: '' };
  const [fields, setfields] = useState(initialFields);

  const initialErrors = {};
  const [errors, setErrors] = useState(initialErrors);

  const initialFormValid = false;
  const [formValid, setformValid] = useState(initialFormValid);

  function handleValidation(fields) {
    let errors = {};
    let formIsValid = true;

    if (!fields['email']) {
      formIsValid = false;
      errors['email'] = 'Please provide Email';
    }

    if (!fields['password']) {
      formIsValid = false;
      errors['password'] = 'Please provide password';
    }

    setErrors(errors);
    setformValid(formIsValid);
  }

  const onInputChange = (name, value) => {
    let newFields = { ...fields, [name]: value };
    setfields(newFields);
    handleValidation(newFields);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!formValid) {
      return alert('Form is not valid');
    }

    const res = await StreamPollsAPI.post(
      `http://127.0.0.1:8000/users/login`,
      fields
    );
    console.log(res.data);
  };

  return (
    <LoginView
      fields={fields}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      errors={errors}
    />
  );
}

export default Login;
