import React from 'react';

import './LoginView.css';
import bg from '../../images/abstract.jpg';

function LoginView({ onInputChange, fields, errors, onSubmit }) {
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
      <div className="login-container">
        <h1>Sign in</h1>
        <form className="sign-in-form">
          <div className="input-container">
            <div className="label-text">
              <span className="text">Email</span>
            </div>
            <div className="input-wrapper">
              <input
                id="email"
                type="text"
                value={fields.email}
                onChange={(event) =>
                  onInputChange(event.target.id, event.target.value)
                }
              />
              <span style={{ color: 'red' }}>{errors['email']}</span>
            </div>
          </div>
          <div className="input-container">
            <div className="password-wrapper">
              <div className="label-text">
                <span className="text">Password</span>
                <a href="#1" className="text-2 bb-1">
                  Forgot?
                </a>
              </div>
            </div>
            <div className="input-wrapper">
              <input
                id="password"
                type="password"
                value={fields.password}
                onChange={(event) =>
                  onInputChange(event.target.id, event.target.value)
                }
              />
              <span style={{ color: 'red' }}>{errors['password']}</span>
            </div>
          </div>
          <div className="form-btn">
            <button onClick={onSubmit} className="btn sign-in-btn">
              Sign in
            </button>
          </div>
          <div className="new-member">
            <span className="text-2">Not a member?</span>
            <a href="#1" className="text-2 bb-1">
              Sign up now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginView;
