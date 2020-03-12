import React from "react";

import "./style.css";

const Button = ({ label }) => {
  return (
    <div className="button">
      <p>{label}</p>
    </div>
  );
};

export default Button;
