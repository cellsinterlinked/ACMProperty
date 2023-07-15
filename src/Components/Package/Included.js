import React from 'react'
import './Included.css';

const Included = ({title, children, icon, wrapStyle }) => {


    return (
        <div className={wrapStyle}>

            <div className="included-box-2">
                <div className="included-icon-wrapper">
                    {icon}
                </div>
            </div>
            <div className="included-box-1">
                <h2>{title}</h2>
                {children}
            </div>

        </div>
    )
   
}

export default Included;