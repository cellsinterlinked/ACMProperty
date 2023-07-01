import React from 'react'
import './Premium.css';
import image1 from '../Assets/Images/real-estate-agent-offering-future-property-purchas-2022-08-15-19-15-36-utc.JPG';
import BasicList from '../Components/Package/BasicList';

const Basic = () => {
    return(
        <div className="package-wrapper">
            <div className="package-header">
                <div className="package-header-contents">
                    <h1>PROPERTY MANAGEMENT/PACKAGES</h1>
                    <h2>Basic</h2>
                    <h3>FREE STRUCTURE</h3>
                    <p>10% of monthly collected rent income, including late fees</p>
                    <p>$45 minimum fee</p>
                    <h3>ADDITIONAL ONE-TIME FEES</h3>
                    <p>Onboarding fees - $30 per unit, if there are tenants alreading residing in the home</p>

                </div>
                <div className="package-header-image">
                    <div>
                    <img alt="" src={image1}/>
                        
                    </div>
                </div>

            </div>
            <div className="package-intro">
                <div className="p-intro-1">
                <h2 className="included">WHATS INCLUDED</h2>
                <p>Designed for investors who want to remain involved with their portfolio, the basic package lends a helping hand to investors who need just a little extra help.</p>
                <p>This package includes the following services</p>

                </div>
                <div className="p-intro-2">
                <ul>
                    <li><div className="bullet"></div>Rent Collections</li>
                    <li>Owner and Tenant Portal Access</li>
                    <li>Legal Compliance</li>
                    <li>Move-In & Move-Out Inspection</li>
                    <li>Financial Reporting</li>
                    <li>Lease Renewal</li>
                    <li>Digital Document Signing</li>
                  
                    
                </ul>

                </div>
            </div>
            <div className="package-contents">
                    <BasicList />
            </div>
        </div>
    )
}

export default Basic;