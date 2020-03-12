import React from "react";

import './style.css'

const TextInput = ({ title, required, error, password }) => {
  return (
    <div className='textinput-container'>
      <p>
        {title} {required && <span>*</span>}
      </p>
      <input type={password ? "password" : "text"} />

      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default TextInput;
