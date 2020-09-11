import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../form/Form';
import InputContainer from '../form/InputContainer';

import './signUpView.css';
import bg from '../../images/abstract.jpg';

function SignUpView({ onInputChange, fields, errors, onSubmit }) {
  const heading = 'Signup';
  const footerText = 'Already a member?';
  const footerLinkText = 'Sign in';
  const footerLinkAddress = '/login';

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

        <div className="form-btn">
          <button onClick={onSubmit} className="btn action-btn">
            Sign up
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
export default SignUpView;
