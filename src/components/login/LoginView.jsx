// Third Party Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Project Imports
import Form from '../form/Form';
import InputContainer from '../form/InputContainer';

// Styles
import './LoginView.css';
import bg from '../../images/abstract.jpg';

function LoginView({ onInputChange, fields, errors, onSubmit }) {
  const heading = 'Login';
  const footerText = 'Not a member?';
  const footerLinkText = 'Sign up now';
  const footerLinkAddress = '/';

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
        footerLinkText={footerLinkText}
        footerLinkAddress={footerLinkAddress}
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

        <div className="form-btn">
          <button onClick={onSubmit} className="btn action-btn">
            Sign in
          </button>
        </div>

        <div className="footer">
          <span className="text-2">{footerText}</span>
          <Link className="text-2 bb-1" to={footerLinkAddress}>
            {footerLinkText}
          </Link>
        </div>
      </Form>
    </div>
  );
}
export default LoginView;
