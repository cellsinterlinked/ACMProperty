import React from 'react'
import './TextArea.css';

const TextArea = ({onChange, value, styleType, type, name, placeholder, rows}) => {
    return(
        <div className="input-wrapper">
            <textarea type={type} value={value} name={name} placeholder={placeholder} className={styleType} onChange={onChange} rows="6"/>
        </div>
    )
}

export default TextArea;