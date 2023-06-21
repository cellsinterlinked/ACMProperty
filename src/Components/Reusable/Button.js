import './Button.css';
import React from 'react'

const Button = ({children, styleType}) => {
    return(
        <div className={`button-wrapper ${styleType}`} >
            {children}
        </div>
    )
}

export default Button