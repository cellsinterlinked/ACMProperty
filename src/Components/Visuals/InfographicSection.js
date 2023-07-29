import React from 'react'
import './Infographic.css'

const InfographicSection = ({title1, text1, title2, text2, num}) => {
    return(
        <div className="infographic-section">
        <div className="buyer-infographic-box">
          <h2>{title1}</h2>
          <p>
           {text1}
          </p>
        </div>
        <div className="infographic-line">
          <div className="line-number">{num}</div>
          <div className="line-body"></div>
        </div>
        <div className="seller-infographic-box">
          <h2>{title2}</h2>
          <p>
           {text2}
          </p>
        </div>
      </div>
    )
}

export default InfographicSection