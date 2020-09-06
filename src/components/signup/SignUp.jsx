import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import SignUpView from './SignUpView';
import StreamPollsAPI from '../../api/StreamPollsAPI';

function Login(props) {
  const initialFields = { email: '', password: '', passwordConfirm: '' };
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

    if (fields['password'] !== fields['passwordConfirm']) {
      formIsValid = false;
      errors['passwordConfirm'] = 'Password and Password confirm should match';
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
      `http://127.0.0.1:8000/users/signup`,
      fields
    );
    console.log(res.data);
  };

  function render() {
    const id = props.match.params.id;
    console.log(id);

    if (id !== 'creator' && id !== 'user') {
      return <Redirect to={{ pathname: '/page404' }} />;
    }

    // setfields({ ...fields, role: id });
    fields.role = id;

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
