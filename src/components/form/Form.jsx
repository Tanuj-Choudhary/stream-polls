// Third Party imports
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './form.css';

function Form({
  heading,
  footerText,
  footerLinkAddress,
  footerLinkText,
  onSubmit,
  children,
}) {
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
          <Link className="text-2 bb-1" to={footerLinkAddress}>
            {footerLinkText}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Form;
