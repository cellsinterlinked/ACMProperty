import "./Button.css";
import React from "react";

const Button = ({ children, styleType, disabled, type  }) => {
  return (
    <button disabled={disabled} className={`button-wrapper ${styleType}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
