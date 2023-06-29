import React from 'react'
import ContactImage from '../../Assets/Images/VNU_M579_06.png';
import './PreFooter.css';
import {MdOutlineEmail} from 'react-icons/md';

const PreFooter = () => {
    return(
        <div className="pre-footer-wrapper">
            <div className="pre-footer-image">
                <img alt="" src={ContactImage} />
            </div>
            <h2>Speak With an Expert.</h2>

            <div className="pf-num-wrapper">
                <div className="pf-num-1">
                    <p>Phone Number:</p>
                    <MdOutlineEmail className="pf-email-icon"/> 
                </div>
                <div className="pf-num-2">
                    <p>812.592.7785</p>
                    <p>812.592.0028</p>
                    <p className="pf-email">Email</p>
                </div>

            </div>
        </div>
    )
}

export default PreFooter;