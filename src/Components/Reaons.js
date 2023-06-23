import React from 'react'
import './Reasons.css';

const Reasons = () => {
    return (
        <div className="reasons_wrapper">
            <div className="reasons_content">
                <h2>Reasons to Hire ACM Property Management, LLC</h2>
                <div className="sphere_wrapper">
                    <div className="sphere">
                        <h1>Investment Protection</h1>
                        <p>Protect your invenetment with periodic inspections. </p>

                    </div>

                    <div className="sphere">
                        <h1>Increased Revanue</h1>
                        <p>Rent collections are consistent and thorough. </p>

                    </div>

                    <div className="sphere">
                        <h1>Preventative Maintenance</h1>
                        <p>Catch the small things, to prevent the big things </p>

                    </div>

                    <div className="sphere">
                        <h1>Freedom</h1>
                        <p>Create space for freedom in your life by letting us handle the responsibility. </p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reasons;