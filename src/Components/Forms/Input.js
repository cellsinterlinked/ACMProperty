import React from "react";
import "./Input.css";

const Input = ({ onChange, value, styleType, type, name, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      className={styleType}
      onChange={onChange}
    />
  );
};

export default Input;
