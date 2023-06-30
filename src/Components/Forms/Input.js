import React from 'react'
import './Input.css';

const Input = ({onChange, value, styleType, type, name, placeholder}) => {
    return(
        <div className="input-wrapper">
            <input type={type} value={value} name={name} placeholder={placeholder} className={styleType} onChange={onChange}/>
        </div>
    )
}

export default Input;