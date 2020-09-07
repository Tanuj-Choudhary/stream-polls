// Third Party Imports
import React, { useState } from 'react';

// Project Imports
import LoginView from './LoginView';
import StreamPollsAPI from '../../api/StreamPollsAPI';

function Login() {
  // Fields state
  const initialFields = { email: '', password: '' };
  const [fields, setfields] = useState(initialFields);

  // Errors State
  const initialErrors = {};
  const [errors, setErrors] = useState(initialErrors);

  // Form valid state
  const initialFormValid = false;
  const [formValid, setformValid] = useState(initialFormValid);

  // Validation handling
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

  // Input handle
  const onInputChange = (event) => {
    // Get input id as name, and value
    const { id: name, value } = event.target;

    // Create fields object with new value
    let newFields = { ...fields, [name]: value };

    // Set state to new value
    setfields(newFields);

    // Handle validation using new value
    handleValidation(newFields);
  };

  // Form submission
  const onSubmit = async (event) => {
    // Prevent default event (Refresh)
    event.preventDefault();

    // Form not valid return alert
    if (!formValid) {
      return alert('Form is not valid');
    }

    // Send data to API
    const res = await StreamPollsAPI.post(
      `http://127.0.0.1:8000/users/login`,
      fields
    );
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
