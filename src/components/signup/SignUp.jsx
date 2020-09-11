// Third Party Imports
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

// Project Imports
import SignUpView from './SignUpView';
import StreamPollsAPI from '../../api/StreamPollsAPI';
import errorController from '../error/errorController';

function Login(props) {
  // Fields state
  const initialFields = { email: '', password: '', passwordConfirm: '' };
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

    if (fields['password'] !== fields['passwordConfirm']) {
      formIsValid = false;
      errors['passwordConfirm'] = 'Password and Password confirm should match';
    }

    const r = new RegExp(
      '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$'
    );

    if (!r.test(fields['password'])) {
      formIsValid = false;
      errors['password'] =
        '8 to 15 characters,1 lowercase letter,  uppercase letter,  numeric digit, , special character';
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

    try {
      // Send data to API
      await StreamPollsAPI.post(`/users/signup`, fields);

      setfields(initialFields);

      alert('Successfully signed up. Login to continue');
    } catch (err) {
      errorController(err.response);
    }
  };

  function render() {
    // Get id param from URL
    const id = props.match.params.id;

    // If not creator or user Redirect to 404
    if (id !== 'creator' && id !== 'user') {
      return <Redirect to={{ pathname: '/page404' }} />;
    }

    // setfields({ ...fields, role: id });
    // Assign role according to id
    fields.role = id;

    // Return Component
    return (
      <SignUpView
        fields={fields}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        errors={errors}
      />
    );
  }

  return render();
}

export default Login;
