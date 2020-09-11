// Third Party imports
import React from 'react';

// Styles
import './form.css';

function Form({ heading, children }) {
  return (
    <div className="form-container">
      <form className="sign-in-form">
        <h1>{heading}</h1>

        {children}
      </form>
    </div>
  );
}

export default Form;
