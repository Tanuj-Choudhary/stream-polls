import React from 'react';

import Form from '../form/Form';
import InputContainer from '../form/InputContainer';

import './signUpView.css';
import bg from '../../images/abstract.jpg';

function SignUpView({ onInputChange, fields, errors, onSubmit }) {
  const heading = 'Signup';
  const footerText = 'Already a member?';
  const footerLink = 'Sign in';

  return (
    <div
      className="signup-page"
      style={{
        background: `url("${bg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Form
        heading={heading}
        footerText={footerText}
        footerLink={footerLink}
        onSubmit={onSubmit}
      >
        <InputContainer
          name="Email"
          id="email"
          type="text"
          value={fields.email}
          errors={errors.email}
          onInputChange={onInputChange}
        />
        <InputContainer
          name="Password"
          id="password"
          type="password"
          value={fields.password}
          errors={errors.password}
          onInputChange={onInputChange}
        />

        <InputContainer
          name="Password Confirm"
          id="passwordConfirm"
          type="password"
          value={fields.passwordConfirm}
          errors={errors.passwordConfirm}
          onInputChange={onInputChange}
        />
      </Form>
    </div>
  );
}
export default SignUpView;
