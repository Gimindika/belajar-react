import React from "react";

import './style.css'

const TextInput = ({ title, required, error }) => {
  return (
    <div className='textinput-container'>
      <p>
        {title} {required && <span>*</span>}
      </p>
      <input />

      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default TextInput;
