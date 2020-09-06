import React from 'react';

import './signUpView.css';
import bg from '../../images/abstract.jpg';

function SignUpView({ onInputChange, fields, errors, onSubmit }) {
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
      <div className="signup-container">
        <h1>Sign up</h1>
        <form className="sign-up-form">
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
          <div className="input-container">
            <div className="label-text">
              <span className="text">Confirm Pass</span>
            </div>
            <div className="input-wrapper">
              <input
                id="passwordConfirm"
                type="password"
                value={fields.passwordConfirm}
                onChange={(event) =>
                  onInputChange(event.target.id, event.target.value)
                }
              />
              <span style={{ color: 'red' }}>{errors['passwordConfirm']}</span>
            </div>
          </div>
          <div className="form-btn">
            <button onClick={onSubmit} className="btn sign-up-btn">
              Sign up
            </button>
          </div>
          <div className="new-member">
            <span className="text-2">Already a member?</span>
            <a href="#1" className="text-2 bb-1">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUpView;
