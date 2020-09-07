// Third Party imports
import React from 'react';

// Styles
import './inputContainer.css';

function InputContainer({
  name,
  type,
  value,
  id,
  errors,
  onInputChange,
  link,
}) {
  return (
    <div className="input-container">
      <div className="label-text">
        <span className="text">{name}</span>
        <a href="#1" className="text-2 bb-1">
          {link}
        </a>
      </div>
      <div className="input-wrapper">
        <input id={id} type={type} value={value} onChange={onInputChange} />
        <span style={{ color: 'red' }}>{errors}</span>
      </div>
    </div>
  );
}

export default InputContainer;
