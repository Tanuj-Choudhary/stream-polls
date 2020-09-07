// Third Party imports
import React from 'react';

// Styles
import './form.css';

function Form({ heading, footerText, footerLink, onSubmit, children }) {
  return (
    <div className="form-container">
      <form className="sign-in-form">
        <h1>{heading}</h1>

        {children}

        <div className="form-btn">
          <button onClick={onSubmit} className="btn action-btn">
            Sign in
          </button>
        </div>

        <div className="footer">
          <span className="text-2">{footerText}</span>
          <a href="#1" className="text-2 bb-1">
            {footerLink}
          </a>
        </div>
      </form>
    </div>
  );
}

export default Form;
