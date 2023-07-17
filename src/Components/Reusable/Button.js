import "./Button.css";
import React from "react";

const Button = ({ children, styleType, disabled }) => {
  return (
    <button disabled={disabled} className={`button-wrapper ${styleType}`}>
      {children}
    </button>
  );
};

export default Button;
