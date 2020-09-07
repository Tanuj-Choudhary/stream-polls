// Third Party Imports
import React from 'react';

// Project Imports
import Form from '../form/Form';
import InputContainer from '../form/InputContainer';

// Styles
import './LoginView.css';
import bg from '../../images/abstract.jpg';

function LoginView({ onInputChange, fields, errors, onSubmit }) {
  const heading = 'Login';
  const footerText = 'Not a member?';
  const footerLink = 'Sign up now';

  return (
    <div
      className="login-page"
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
          link="Forgot?"
          value={fields.password}
          errors={errors.password}
          onInputChange={onInputChange}
        />
      </Form>
    </div>
  );
}
export default LoginView;
